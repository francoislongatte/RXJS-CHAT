import { ActionTypes } from "../actions/chat.action";

export interface configState {
  username: string;
  themeDark: boolean;
  clock12hour: boolean;
  shortcutEnter: boolean;
}

export interface ChatState {
  isLoadConfig: boolean;
  config: configState;
  messages: {
    user: string;
    message: string;
    read: boolean;
    date: string;
  }[],
  countNotRead: number
}

export const initialState: ChatState = {
  isLoadConfig: false,
  config: {
    username: "",
    themeDark: false,
    clock12hour: false,
    shortcutEnter: false
  },
  messages: [],
  countNotRead: 0
};

export function ChatReducer(state: ChatState = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOAD_CONFIG_SUCCESS:
      return {
        ...state,
        config: action.state,
        isLoadConfig: true
      };
    case ActionTypes.START_APP_SUCCESS:
      return {
        ...state,
        messages: action.messages.map(message => {
          message.read = false;
          return message;
        })
      };
    case ActionTypes.ADD_MESSAGE_SUCCESS:
      action.message.read = false;
      return {
        ...state,
        messages: [...state.messages, action.message],
        countNotRead: [...state.messages, action.message].filter(message => message.read === false).length
      };
    case ActionTypes.UPDATE_MESSAGE:
      const newStates = state.messages.map(message => {
        message.read = true
        return message;
      })
      return {
        ...state,
        messages: newStates,
        countNotRead: newStates.filter(message => message.read == false).length
      };
    case ActionTypes.UPDATE_CONFIG_SUCCESS:
      return {
        ...state,
        config: action.config
      };
    default:
      return state;
  }
}
