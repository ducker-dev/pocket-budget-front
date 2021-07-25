type TPayload = any;
type TAction = {
    payload: TPayload,
    type: string,
};


// @ts-ignore
export const createReducer = (initialState, handlers) => {
    return (state = initialState, action: TAction) => {
        const handler = handlers[action.type];
        if (handler) {
            return handler(state, action.payload);
        }
        return state;
    }
};