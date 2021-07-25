import {combineReducers} from 'redux';
import {COMMON_MODULE_NAME} from "../../modules/common/constants";
import {commonReducer} from "../../modules/common/reducers";

export const rootReducer = combineReducers({
    [COMMON_MODULE_NAME]: commonReducer,
});
