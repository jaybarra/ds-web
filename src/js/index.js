import React from "react";
import ReactDOM from "react-dom";

import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";

import createHistory from "history/createBrowserHistory";
import {routerMiddleware} from "react-router-redux";
import {Router, Route} from "react-router-dom";

import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {createLogger} from "redux-logger";

import {App} from "./App";

import masterReducer from "./reducers";

// Create history for single page navigation
const history = createHistory();
const routerMiddle = routerMiddleware(history);

const middleware = applyMiddleware(promise(), thunk, createLogger(), routerMiddle);
const store = createStore(masterReducer, middleware);

// ============================================================================

// Render the app
ReactDOM.render(
    <Provider store={store}>
        <Router history={history} basename={ds_config.root}>
            <Route component={App}/>
        </Router>
    </Provider>
    ,
    document.getElementById("root"));
