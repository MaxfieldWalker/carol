import { Action } from "redux";
import { UPDATE_TEXT } from "./types";

export interface UpdateTextAction extends Action {
    newText: string;
}

export function updateText(newText: string): UpdateTextAction {
    return {
        type: UPDATE_TEXT,
        newText
    };
}
