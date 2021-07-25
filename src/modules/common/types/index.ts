import {ELangOptions, EThemeLogic, EThemeOptions} from "../enums";

export type TCommonState = {
    theme: EThemeOptions.light | EThemeOptions.dark,
    themeLogic: EThemeLogic.user | EThemeLogic.os,
    lang: ELangOptions.en | ELangOptions.ru,
};