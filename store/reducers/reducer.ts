import { AppActions, APP_ACTIONS } from "../actions";
import { AppState } from "../state";

export const initState: AppState = {
  calculatorDescription: '',
  calculatorTitle: '',
  menu: {
      items: []
  },
  reviews:[],
  selectedReviewIndex: 0,
  testimonialTitle: '',
  fullTimeEmployees: 0,
  monthlyIngredientSpending: 0
}

function reducer(state: AppState = initState, action: AppActions): AppState {
    switch (action.type) {
      case APP_ACTIONS.MENU_LOADED:
        return state = {
          ...state,
          menu: action.menu
        }
      case APP_ACTIONS.REVIEW_CHANGED:
        return state = {
          ...state,
          selectedReviewIndex: action.selectedReviewIndex
        }
      case APP_ACTIONS.REVIEWS_LOADED:
        return state = {
          ...state,
          selectedReviewIndex: 0,
          testimonialTitle: action.testimonialTitle,
          reviews: action.reviews
        }
      case APP_ACTIONS.CALCULATOR_INFO_LOADED:
        return state = {
          ...state,
          calculatorTitle: action.calculatorTitle,
          calculatorDescription: action.calculatorDescription
        }
      case APP_ACTIONS.FULL_TIME_EMPLOYEES_LOADED:
        return state = {
          ...state,
          fullTimeEmployees: action.fullTimeEmployees,
        }
      case APP_ACTIONS.MONTHLY_INGREDIENTS_SPENDING_LOADED:
        return state = {
          ...state,
          monthlyIngredientSpending: action.monthlyIngredientSpending,
        }
      case APP_ACTIONS.NEXT_HYDRATE:
        return state = {
          ...state,
          ...action.payload.app
        }
      default:
        return state;
    }
}
  
export default reducer;
  