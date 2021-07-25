import {ELangOptions, EThemeOptions} from "../enums";

export type TCommonState = {
    theme: EThemeOptions.light | EThemeOptions.black,
    lang: ELangOptions.en | ELangOptions.ru,
};