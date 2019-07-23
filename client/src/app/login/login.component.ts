import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { UpdateConfig } from "../shared/ngrx/actions/chat.action";
import {
  ChatState,
  configState,
  initialState
} from "../shared/ngrx/reducers/chat.reducers";
import { getConfig } from "../shared/ngrx/selectors/chat.selector";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscription: Subscription[] = [];
  public username: FormControl;

  constructor(private store: Store<ChatState>, private router: Router) {
    this.username = new FormControl("", Validators.required);
  }

  ngOnInit() {
    const selectConfig = this.store.select(getConfig).subscribe(config => {
      if (config.username != "") {
        this.router.navigate(["/"]);
      }
    });
    this.subscription.push(selectConfig);
  }

  sendUsername() {
    if (this.username.valid) {
      const value: configState = {
        ...initialState.config,
        username: this.username.value
      };
      this.store.dispatch(new UpdateConfig(value));
      this.router.navigate(["/"]);
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }
}
