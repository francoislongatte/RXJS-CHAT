import { createSelector } from '@ngrx/store';

export const getChatState = state => state.ChatReducer;

export const getConfig = createSelector(getChatState, state => state && state.config ? state.config : null);

export const isLogin = createSelector(getChatState, state => state && state.config && state.config.username && state.config.username != "" ? true : false);

export const isLoadConfig = createSelector(getChatState, state => state && state.isLoadConfig);

export const username = createSelector(getChatState, state => state && state.config && state.config.username ? state.config.username : undefined);

export const messages = createSelector(getChatState, state => state && state.messages ? state.messages : [] );

export const count = createSelector(getChatState, state => state && state.countNotRead ? state.countNotRead : 0 );