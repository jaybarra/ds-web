import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {AuthenticationReducer} from "./AuthenticationReducer";

export default combineReducers({
    router: routerReducer,  
    auth: AuthenticationReducer
});
