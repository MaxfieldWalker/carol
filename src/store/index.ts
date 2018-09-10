import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import saga from "../saga";

import { reducer } from "../reducers/index";

export interface AppState {
    text: string;
}

const initialState: AppState = {
    text: ""
};

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducer as any,
    initialState,
    applyMiddleware(sagaMiddleware)
);

// sagaMiddleware.run(saga);

store.subscribe(() => {
    console.log(store.getState());
});
