import {createReducer} from "../../../app/helpers";
import {ELangOptions, EThemeOptions} from "../enums";
import {TCommonState} from "../types";
import {COMMON_ACTION_TYPE} from "../constants";

export const initialState: TCommonState = {
    theme: EThemeOptions.light,
    lang: ELangOptions.en,
};

const changeTheme = (state: TCommonState, payload: TCommonState['theme']) => ({
    ...state,
    theme: payload,
});
const changeLang = (state: TCommonState, payload: TCommonState['lang']) => ({
    ...state,
    lang: payload,
});

const handlers = {
    [COMMON_ACTION_TYPE.CHANGE_THEME]: changeTheme,
    [COMMON_ACTION_TYPE.CHANGE_LANG]: changeLang,
};

export const commonReducer = createReducer(initialState, handlers);