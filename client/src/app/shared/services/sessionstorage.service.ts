import { Injectable } from "@angular/core";
import { environment as env } from "../../../environments/environment";
import { configState } from "../ngrx/reducers/chat.reducers";

@Injectable({
  providedIn: "root"
})
export class SessionstorageService {
  constructor() {}

  getConfig(): configState {
    return JSON.parse(sessionStorage.getItem(env.nLocalstorage));
  }

  setConfig(newConfig: configState) {
    sessionStorage.setItem(env.nLocalstorage, JSON.stringify(newConfig));
  }
}
