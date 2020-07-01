import { AppActions, APP_ACTIONS } from "./actions";
import { AppState } from "./state";

export const initState: AppState = {
  calculatorInfo: {
      calculator: {
          description: '',
          title: '',
      }
  },
  menu: {
      items: []
  },
  reviews:[],
  selectedReviewIndex: 0,
  testimonialTitle: ''
}

function reducer(state: AppState = initState, action: AppActions): AppState {
    switch (action.type) {
      case APP_ACTIONS.INIT:
        return {
          ...state,
        }
      default:
        return state;
    }
}
  
export default reducer;
  