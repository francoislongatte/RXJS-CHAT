import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PickerModule } from "@ctrl/ngx-emoji-mart";
import { provideMockActions } from "@ngrx/effects/testing";
import { Store } from "@ngrx/store";
import {
  MockStore,
  MockStoreConfig,
  provideMockStore
} from "@ngrx/store/testing";
import { EmbedVideo } from "ngx-embed-video";
import { NgxLinkifyjsModule } from "ngx-linkifyjs";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { of, ReplaySubject } from "rxjs";
import { AddMessage } from "../shared/ngrx/actions/chat.action";
import { ChatEffects } from "../shared/ngrx/effects/chat.effect";
import { ChatState, initialState } from "../shared/ngrx/reducers/chat.reducers";
import { getConfig, username } from "../shared/ngrx/selectors/chat.selector";
import { ChatComponent } from "./chat.component";

describe("ChatComponent", () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  let store: MockStore<ChatState>;
  let actions: ReplaySubject<any>;
  const initState: MockStoreConfig<ChatState> = {
    initialState: initialState
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        NgxLinkifyjsModule.forRoot(),
        EmbedVideo.forRoot(),
        PickerModule
      ],
      providers: [
        ToastrService,
        ChatEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions)
      ]
    }).compileComponents();

    store = TestBed.get<Store<any>>(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("get config from store", () => {
    it("METHOD isShorCut - Config shortcutEnter is true", done => {
      const spySelect = spyOn(store, "select").and.callFake(() =>
        of({ shortcutEnter: true })
      );
      const property = spyOnProperty(
        component,
        "isShorcut",
        "get"
      ).and.callThrough();

      component.isShorcut.subscribe(value => {
        expect(value).toEqual(true);
        expect(spySelect).toHaveBeenCalledWith(getConfig);
        done();
      });
    });
    it("METHOD isShorCut - Config shortcutEnter is false", done => {
      const spySelect = spyOn(store, "select").and.callFake(() =>
        of({ shortcutEnter: false })
      );
      const property = spyOnProperty(
        component,
        "isShorcut",
        "get"
      ).and.callThrough();

      component.isShorcut.subscribe(value => {
        expect(value).toEqual(false);
        expect(spySelect).toHaveBeenCalledWith(getConfig);
        done();
      });
    });
  });

  describe("get username from store", () => {
    it("METHOD usernameStore", done => {
      const spySelect = spyOn(store, "select").and.callFake(() => of("test"));
      const property = spyOnProperty(
        component,
        "usernameStore",
        "get"
      ).and.callThrough();

      component.usernameStore.subscribe((value: string) => {
        expect(value).toEqual("test");
        expect(spySelect).toHaveBeenCalledWith(username);
        done();
      });
    });
  });

  describe("get Theme value from store", () => {
    it("METHOD isDark", done => {
      const spySelect = spyOn(store, "select").and.callFake(() =>
        of({ themeDark: true })
      );
      spyOnProperty(component, "isDark", "get").and.callThrough();

      component.isDark.subscribe((value: boolean) => {
        expect(spySelect).toHaveBeenCalledWith(getConfig);
        expect(value).toEqual(true);
        done();
      });
    });
  });

  describe("Test Format Date ", () => {
    it("METHOD formatDateAMPM - setting from store - CONFIG : 12HOUR", done => {
      const spySelect = spyOn(store, "select").and.callFake(() =>
        of({ clock12hour: true })
      );
      const methodDate = spyOn(component, "formatDateAMPM").and.callThrough();

      component.formatDateAMPM("1995-12-17T15:24:00").subscribe(value => {
        expect(value).toBe("03:24");
        expect(spySelect).toHaveBeenCalledWith(getConfig);
        done();
      });
    });
    it("METHOD formatDateAMPM - setting from store - CONFIG : 24HOUR", done => {
      const spySelect = spyOn(store, "select").and.callFake(() =>
        of({ clock12hour: false })
      );
      const methodDate = spyOn(component, "formatDateAMPM").and.callThrough();
      component.formatDateAMPM("1995-12-17T15:24:00").subscribe(value => {
        expect(value).toBe("15:24");
        expect(spySelect).toHaveBeenCalledWith(getConfig);
        done();
      });
    });
  });

  describe("function sendMessage", () => {
    it("user click to send message without event enter", () => {
      const message = "message";
      spyOnProperty(component, "usernameStore", "get").and.callFake(() =>
        of("test")
      );
      const spyDispatch = spyOn(store, "dispatch").and.callThrough();
      const spySelect = spyOn(store, "select").and.callThrough();
      component.message.setValue(message);
      component.sendMessage();
      expect(spyDispatch).toHaveBeenCalledWith(
        new AddMessage({
          name: "test",
          description: message
        })
      );
      expect(spySelect).not.toHaveBeenCalledWith(getConfig);
    });
    it("user click to send message with event enter - config shortcut is true", () => {
      const message = "message";
      spyOnProperty(component, "usernameStore", "get").and.callFake(() =>
        of("test")
      );
      const spyDispatch = spyOn(store, "dispatch").and.callThrough();
      const spySelect = spyOn(store, "select").and.callFake(() =>
        of({
          username: "test",
          themeDark: false,
          clock12hour: false,
          shortcutEnter: true
        })
      );
      component.message.setValue(message);
      component.sendMessage(new Event(null, null));
      expect(spyDispatch).toHaveBeenCalledWith(
        new AddMessage({
          name: "test",
          description: message
        })
      );
      expect(spySelect).toHaveBeenCalledWith(getConfig);
    });
    it("user click to send message with event enter - config shortcut is false", () => {
      const message = "message";
      spyOnProperty(component, "usernameStore", "get").and.callFake(() =>
        of("test")
      );
      const spyDispatch = spyOn(store, "dispatch").and.callThrough();
      const spySelect = spyOn(store, "select").and.callFake(() =>
        of({
          username: "test",
          themeDark: false,
          clock12hour: false,
          shortcutEnter: false
        })
      );
      component.message.setValue(message);
      component.sendMessage(new Event(null, null));
      expect(spyDispatch).not.toHaveBeenCalled();
      expect(spySelect).toHaveBeenCalledWith(getConfig);
    });
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
