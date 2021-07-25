import {COMMON_MODULE_NAME} from "../constants";
import {TCommonState} from "../types";
import {TState} from "../../../app/types";

export function selectCommonModule(state: TState) {
    return state[COMMON_MODULE_NAME];
}

export function selectTheme(state: TState): TCommonState["theme"] {
    return selectCommonModule(state).theme;
}

export function selectThemeLogic(state: TState): TCommonState["themeLogic"] {
    return selectCommonModule(state).themeLogic;
}
