import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as dateFns from "date-fns";
import { EmbedVideoService } from "ngx-embed-video";
import { Observable, Subscription } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Message } from "../shared/models/message";
import {
  ActionTypes,
  AddMessage,
  UpdateMessage
} from "../shared/ngrx/actions/chat.action";
import { ChatState } from "../shared/ngrx/reducers/chat.reducers";
import {
  getConfig,
  messages,
  username
} from "../shared/ngrx/selectors/chat.selector";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
  animations: [
    trigger("activeAnimation", [
      state("false", style({ opacity: "0", display: "none" })),
      state("true", style({ opacity: "1" })),

      transition("false => true", [
        style({ display: "block" }),
        animate("100ms ease-in")
      ]),

      transition("true => false", [animate("100ms ease-in")])
    ])
  ]
})
export class ChatComponent implements OnInit, OnDestroy {
  private subscription: Subscription[] = [];
  public isLoading: boolean = false;
  public message: FormControl = new FormControl("", Validators.required);

  private boxScroll: Element;
  private regexYoutube: RegExp = new RegExp(
    "^(https?://)?(www.)?(youtube.com|youtu.?be)/.+$"
  );

  private firstInitMessages: boolean = false;
  public openSmiley: boolean = false;
  private cachedMessages: Message[] = [];
  private activeBlink: boolean = false;
  constructor(
    private store: Store<ChatState>,
    private action$: Actions,
    private embedService: EmbedVideoService
  ) {}

  ngOnInit() {
    this.boxScroll = document.getElementById("boxScroll");
    this.action$.pipe(
      ofType(ActionTypes.ADD_MESSAGE),
      tap(() => (this.isLoading = true))
    );

    this.action$.pipe(
      ofType(ActionTypes.ADD_MESSAGE_SUCCESS),
      tap(() => (this.isLoading = false))
    );
  }

  onScroll($event) {
    this.store.dispatch(new UpdateMessage());
  }

  get messages(): Observable<Message[]> {
    return this.store.select(messages).pipe(
      tap((messages: Message[]) => {
        if (JSON.stringify(this.cachedMessages) !== JSON.stringify(messages)) {
          if (!this.firstInitMessages) {
            setTimeout(() => {
              this.boxScroll.scrollTop = this.boxScroll.scrollHeight;
            });
            this.firstInitMessages = !this.firstInitMessages;
            this.store.dispatch(new UpdateMessage());
          } else {
            this.activeBlink = true;
            setTimeout(() => {
              this.activeBlink = false;
            }, 1000);
            if (this.boxScroll.scrollHeight === this.boxScroll.clientHeight) {
              this.store.dispatch(new UpdateMessage());
            }
          }
        }
        this.cachedMessages = messages;
      })
    );
  }

  sendMessage($event = null) {
    const send = () => {
      const usernameStoreSubscription = this.usernameStore.subscribe(name => {
        this.store.dispatch(
          new AddMessage({
            name: name,
            description: this.message.value
          })
        );
      });
      this.message.reset();
      this.subscription.push(usernameStoreSubscription);
    };
    if ($event != null) {
      const getConfigSubscription = this.store
        .select(getConfig)
        .subscribe(config => {
          if (config.shortcutEnter) {
            $event.preventDefault();
            send();
          }
        });
      this.subscription.push(getConfigSubscription);
    } else {
      send();
    }
  }

  addEmoji($event) {
    this.message.setValue((this.message.value ? this.message.value : "") + " " + $event.emoji.native);
  }

  get usernameStore(): Observable<string> {
    return this.store.select(username);
  }

  get isDark(): Observable<Boolean> {
    return this.store.select(getConfig).pipe(map(config => config.themeDark));
  }

  get isShorcut(): Observable<Boolean> {
    return this.store
      .select(getConfig)
      .pipe(map(config => config.shortcutEnter));
  }

  isEmbedVideo(texte: string): boolean {
    return this.regexYoutube.test(texte);
  }

  embedVideo(texte: string) {
    return this.embedService.embed(texte, { image: "thumbnail_medium" });
  }

  toggleSmiley() {
    this.openSmiley = !this.openSmiley;
  }

  formatDateAMPM(date: string): Observable<string> {
    return this.store.select(getConfig).pipe(
      map(config => {
        if (config.clock12hour) {
          return dateFns.format(date, "hh:mm");
        } else {
          return dateFns.format(date, "HH:mm");
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }
}
