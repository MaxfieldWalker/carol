import { Action } from "redux";
import { AppState } from "../store/index";
import { UPDATE_TEXT } from "../actions/types";
import { UpdateTextAction } from "../actions";

export const reducer = (state: AppState, action: Action): AppState => {
    if (action.type === UPDATE_TEXT) {
        const text = (action as UpdateTextAction).newText;
        return {
            text: text.length > 0 ? text : "何も入力されてないお"
        };
    }

    return state;
};
