

export interface StateType {
    txnDate: string
}

export interface ActionType {
    type: string,
    payload: any
}

export const UPDATE_TXN_INPUT = "UPDATE_TXN_INPUT";
export const updateTxnInput = (updatedState : Partial<StateType>) => ({
    type: UPDATE_TXN_INPUT as typeof UPDATE_TXN_INPUT,
    updatedState
})