import { StateType, ActionType, UPDATE_TXN_INPUT } from "./types";

export function transactionReducer(state: StateType, action: ActionType) {
    switch (action.type) {
        case UPDATE_TXN_INPUT:
            return {
                ...state,
                ...action.payload
            }
        default :
            return {
                ...state
            }
    }
};

export const getTransaction = (state: StateType) => state?.date