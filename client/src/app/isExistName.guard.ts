import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { mergeMap, tap } from "rxjs/operators";
import { Load } from "./shared/ngrx/actions/chat.action";
import { ChatState } from "./shared/ngrx/reducers/chat.reducers";
import { isLoadConfig, isLogin } from "./shared/ngrx/selectors/chat.selector";

@Injectable({
  providedIn: "root"
})
export class IsExistName implements CanActivate {
  constructor(private store: Store<ChatState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      tap(() => {
        this.store.select(isLoadConfig).subscribe(isLoad => {
          if (!isLoad) {
            this.store.dispatch(new Load());
          }
        });
      }),
      select(isLogin),
      mergeMap(isLogin => {
        if (isLogin) {
          if (state.url === "/login") {
            this.router.navigate(["/chat"]);
            return of(false);
          } else {
            return of(true);
          }
        } else {
          if (state.url === "/login") {
            return of(true);
          } else {
            this.router.navigate(["/login"]);
            return of(false);
          }
        }
      })
    );
  }
}
