export const ALERT_SUCCESS = 'ALERT_SUCCESS';
export const ALERT_ERROR = 'ALERT_ERROR';
export const CLEAR_ALERT = 'CLEAR_ALERT';

interface alertSuccess {
  type: typeof ALERT_SUCCESS,
  payload: {
    message: string
  }
}

interface alertError {
  type: typeof ALERT_ERROR,
  payload: {
    message: string
  }
}

interface clearAlert {
  type: typeof CLEAR_ALERT
}

export interface AlertState {
  type: string | null,
  message: string | null
}

export type AlertActionTypes = alertSuccess | alertError | clearAlert;