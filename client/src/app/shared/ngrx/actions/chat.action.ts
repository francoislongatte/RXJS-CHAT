import { Action } from "@ngrx/store";
import { ChatState, configState } from "../reducers/chat.reducers";
import { Message } from "../../models/message";

/**
 * All the constants to define our actions
 */
export enum ActionTypes {
  START_APP = "START_APP",
  START_APP_SUCCESS = "START_APP_SUCCESS",
  LOAD_CONFIG = "LOAD_CONFIG",
  LOAD_CONFIG_SUCCESS = "LOAD_CONFIG_SUCCESS",
  ADD_MESSAGE = "ADD_MESSAGE",
  ADD_MESSAGE_SUCCESS = "ADD_MESSAGE_SUCCESS",
  UPDATE_MESSAGE = "UPDATE_MESSAGE",
  UPDATE_CONFIG = "UPDATE_CONFIG",
  UPDATE_CONFIG_SUCCESS = "UPDATE_CONFIG_SUCCESS"
}

/**
 * Implementation of all actions that we are handle
 */

/**
 * A class - Action Start
 * @class  Start
 */
export class Start implements Action {
  readonly type = ActionTypes.START_APP;

  /**
   * Create a Action Start.
   */
  constructor() {}
}

/**
 * A class - Action StartSuccess
 * @class  StartSuccess
 */
export class StartSuccess implements Action {
  readonly type = ActionTypes.START_APP_SUCCESS;

  /**
   * Create a Action Start.
   * @param {messages} Message[] - The Array of Message.
   */
  constructor(public messages: Message[]) {}
}

/**
 * A class - Action Load
 * @class  Load
 */
export class Load implements Action {
  readonly type = ActionTypes.LOAD_CONFIG;
  /**
   * Create a Action Load.
   */
  constructor() {}
}

export class LoadSuccess implements Action {
  readonly type = ActionTypes.LOAD_CONFIG_SUCCESS;

  constructor(public state: configState) {}
}

export class AddMessage implements Action {
  readonly type = ActionTypes.ADD_MESSAGE;

  constructor(public message: Message) {}
}

export class AddMessageSuccess implements Action {
  readonly type = ActionTypes.ADD_MESSAGE_SUCCESS;

  constructor(public message: Message) {}
}

export class UpdateMessage implements Action {
  readonly type = ActionTypes.UPDATE_MESSAGE;

  constructor() {}
}

export class UpdateConfig implements Action {
  readonly type = ActionTypes.UPDATE_CONFIG;

  constructor(public config: configState) {}
}

export class UpdateConfigSuccess implements Action {
  readonly type = ActionTypes.UPDATE_CONFIG_SUCCESS;

  constructor(public config: configState) {}
}

export type Actions =
  | Start
  | StartSuccess
  | Load
  | LoadSuccess
  | AddMessage
  | AddMessageSuccess
  | UpdateMessage
  | UpdateConfig
  | UpdateConfigSuccess;
