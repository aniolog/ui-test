import { Action as ReduxAction } from "redux";
import { Menu, Review } from "../types";
import { AppState } from "./state";

export enum APP_ACTIONS {
  INIT= 'APP.INIT',
  MENU_LOADED = 'APP.MENU_LOADED',
  REVIEW_CHANGED = 'APP.REVIEW_CHANGED',
  REVIEWS_LOADED = 'APP.REVIEWS_LOADED',
  NEXT_HYDRATE = '__NEXT_REDUX_WRAPPER_HYDRATE__',
  CALCULATOR_INFO_LOADED = 'APP.CALCULATOR_INFO_LOADED',
  FULL_TIME_EMPLOYEES_LOADED  = 'APP.FULL_TIME_EMPLOYEES',
  MONTHLY_INGREDIENTS_SPENDING_LOADED  = 'APP.MONTHLY_INGREDIENTS_SPENDING_LOADED',
}

export interface InitApp extends ReduxAction {
  type: APP_ACTIONS.INIT,
}

export interface menuLoaded extends ReduxAction {
  type: APP_ACTIONS.MENU_LOADED,
  menu: Menu
}

export interface reviewChanged extends ReduxAction {
  type: APP_ACTIONS.REVIEW_CHANGED,
  selectedReviewIndex: number
}

export interface reviewsLoaded extends ReduxAction {
  type: APP_ACTIONS.REVIEWS_LOADED,
  testimonialTitle: string,
  reviews: Array<Review>
}

export interface calculatorInfoLoaded extends ReduxAction {
  type: APP_ACTIONS.CALCULATOR_INFO_LOADED,
  calculatorDescription: string,
  calculatorTitle: string,
}

export interface fullTimeEmployeesLoaded extends ReduxAction {
  type: APP_ACTIONS.FULL_TIME_EMPLOYEES_LOADED,
  fullTimeEmployees: number,
}

export interface monthlyIngredientsSpendingLoaded extends ReduxAction {
  type: APP_ACTIONS.MONTHLY_INGREDIENTS_SPENDING_LOADED,
  monthlyIngredientSpending: number,
}

export interface nextHydrate extends ReduxAction {
  type: APP_ACTIONS.NEXT_HYDRATE,
  payload: {
    app: AppState
  } 
}

export type AppActions = InitApp | 
  menuLoaded |
  reviewChanged |
  nextHydrate |
  reviewsLoaded |
  calculatorInfoLoaded |
  fullTimeEmployeesLoaded |
  monthlyIngredientsSpendingLoaded;
