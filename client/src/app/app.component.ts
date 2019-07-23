import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { Start, UpdateConfig } from "./shared/ngrx/actions/chat.action";
import { ChatState } from "./shared/ngrx/reducers/chat.reducers";
import {
  count,
  getConfig,
  isLogin
} from "./shared/ngrx/selectors/chat.selector";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  private _activeMenu: boolean;

  constructor(private store: Store<ChatState>, private router: Router) {
    this._activeMenu = false;
    this.store.dispatch(new Start());
  }

  ngOnInit() {}

  get isLogin(): Observable<boolean> {
    return this.store.select(isLogin);
  }

  get activeMenu() {
    return this._activeMenu;
  }

  set activeMenu(value: boolean) {
    this._activeMenu = value;
  }

  get count(): Observable<boolean> {
    return this.store.select(count);
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  get isDark(): Observable<Boolean> {
    return this.store.select(getConfig).pipe(map(config => config.themeDark));
  }

  disconnect() {
    this.store
      .select(getConfig)
      .pipe(take(1))
      .subscribe(config => {
        this.store.dispatch(
          new UpdateConfig({
            ...config,
            username: ""
          })
        );
      });
    this.router.navigate(["/login"]);
  }
}
