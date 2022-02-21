import { AlertActionTypes, AlertState, ALERT_ERROR, ALERT_SUCCESS, CLEAR_ALERT } from "./types";

const initialState: AlertState = {
  type: null,
  message: null
}

export const alertReducer = (state: AlertState = initialState, action: AlertActionTypes) => {
  switch(action.type) {
    case ALERT_SUCCESS: {
      return {type: 'alert-success', message: action.payload.message}
    }
    case ALERT_ERROR: {
      return {type: 'alert-error', message: action.payload.message}
    }
    case CLEAR_ALERT: {
      return {type: null, message: null}
    }
    default: 
      return state;
  }
}