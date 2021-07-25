import {COMMON_MODULE_NAME} from "../../modules/common/constants";
import {TCommonState} from "../../modules/common/types";

export type TState = {
    [COMMON_MODULE_NAME]: TCommonState;
}