import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { UpdateConfig } from "../shared/ngrx/actions/chat.action";
import {
  ChatState,
  configState,
  initialState
} from "../shared/ngrx/reducers/chat.reducers";
import { getConfig } from "../shared/ngrx/selectors/chat.selector";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit, OnDestroy {
  private subscription: Subscription[] = [];
  public settings: FormGroup;

  private username: string;

  constructor(private store: Store<ChatState>) {
    this.settings = new FormGroup({
      username: new FormControl("", {
        updateOn: "blur",
        validators: Validators.required
      }),
      themeDark: new FormControl(false),
      clock12hour: new FormControl(false),
      shortcutEnter: new FormControl(false)
    });
  }

  ngOnInit() {
    const getConfigSubscription = this.store
      .select(getConfig)
      .subscribe((config: configState) => {
        this.settings.setValue(config, { emitEvent: false });
      });
    const settingsChangeSubscription = this.settings.valueChanges.subscribe(
      value => {
        const configState: configState = {
          username: value.username,
          themeDark: value.themeDark,
          clock12hour: value.clock12hour,
          shortcutEnter: value.shortcutEnter
        };
        this.username = value.username;
        this.store.dispatch(new UpdateConfig(configState));
      }
    );
    this.subscription.push(getConfigSubscription, settingsChangeSubscription);
  }

  reset() {
    this.store.dispatch(
      new UpdateConfig({ ...initialState.config, username: this.username })
    );
  }

  isActive(value, nameFormControl): boolean {
    return this.settings.get(nameFormControl).value == value;
  }

  get isDark(): Observable<Boolean> {
    return this.store.select(getConfig).pipe(map(config => config.themeDark));
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }
}
