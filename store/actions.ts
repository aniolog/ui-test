import { Action as ReduxAction } from "redux";

export enum APP_ACTIONS {
  INIT= "APP.INIT",
}

export interface InitApp extends ReduxAction {
  type: APP_ACTIONS.INIT,
}

export type AppActions = InitApp;
