import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, tap, take} from "rxjs/operators";

import {
  ActionTypes,
  UpdateConfig,
  UpdateConfigSuccess,
  AddMessage,
  AddMessageSuccess,
  LoadSuccess,
  Load,
  StartSuccess,
  Start
} from "../actions/chat.action";

import {
  initialState,
  ChatState,
  configState
} from "../reducers/chat.reducers";
import { ToastrService } from "ngx-toastr";
import { SessionstorageService } from "../../services/sessionstorage.service";
import { Router } from "@angular/router";
import { ChatService } from "../../services/app.chat.service";
import { Message } from "../../models/message";
import { Store } from "@ngrx/store";

@Injectable({
  providedIn: "root"
})
export class ChatEffects {
  @Effect()
  $start = this.actions.pipe(
    ofType<Start>(ActionTypes.START_APP),
    mergeMap(() => this.chatService.getAllMessage().pipe(take(1))),
    map((messages:  Message[]) => {
        return new StartSuccess(messages);
    })
  );

  @Effect()
  $LoadConfig = this.actions.pipe(
    ofType<Load>(ActionTypes.LOAD_CONFIG),
    mergeMap(messages => of(this.lsStorage.getConfig())),
    map((lsConfig: configState) => {
      if (lsConfig) {
        return new LoadSuccess(lsConfig);
      } else {
        this.lsStorage.setConfig(initialState.config);
        return new LoadSuccess(initialState.config);
      }
    })
  );

  @Effect({ dispatch: false })
  $addMessage = this.actions.pipe(
    ofType<AddMessage>(ActionTypes.ADD_MESSAGE),
    map(data => {
      this.chatService.sendMessage(data.message);
    })
  );

  @Effect()
  $receiveMessage = this.chatService.getNewMessage().pipe(
    map(data => {
      return new AddMessageSuccess(data);
    })
  );

  @Effect()
  $config = this.actions.pipe(
    ofType<UpdateConfig>(ActionTypes.UPDATE_CONFIG),
    map(action => {
      let configChange = [];
      const getConfig: configState = this.lsStorage.getConfig();
      const newConfig: configState = {
        ...getConfig,
        ...action.config
      };
      this.lsStorage.setConfig(newConfig);

      for (var property in getConfig) {
        if (getConfig[property] != newConfig[property]) {
          configChange.push(property);
        }
      }

      const toastrMessange = () => {
        this.toastr.success(
          `Success Change`,
          `Update Settings - ${configChange.join(",")}`, 
          { timeOut: 3000 }
        );
      }

      if(configChange[0] === 'username' && newConfig.username != ""){
        toastrMessange();
      }else if(configChange[0] !== 'username'){
        toastrMessange();
      }

      return new UpdateConfigSuccess(newConfig);
    })
  );

  constructor(
    private lsStorage: SessionstorageService,
    private toastr: ToastrService,
    private actions: Actions,
    private chatService: ChatService
  ) {}
}
