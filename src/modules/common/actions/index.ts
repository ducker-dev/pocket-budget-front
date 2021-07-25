import {TCommonState} from "../types";
import {COMMON_ACTION_TYPE} from "../constants";

export function aChangeTheme(payload: TCommonState["theme"]) {
    return {
        payload,
        type: COMMON_ACTION_TYPE.CHANGE_THEME,
    };
}