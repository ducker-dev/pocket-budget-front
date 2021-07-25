import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from "./reducers";
import {APP_ROUTES} from "./constants/routes";
import '../styles/common.scss';
import Start from "../modules/common/pages/Start";
import NotFound from "../modules/common/pages/NotFound";
import Profile from "../modules/user/pages/Profile";

function App() {
    const store = createStore(rootReducer, composeWithDevTools());

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path={APP_ROUTES.COMMON.START} exact component={Start} />
                    <Route path={APP_ROUTES.USER.PROFILE} exact component={Profile}/>
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
