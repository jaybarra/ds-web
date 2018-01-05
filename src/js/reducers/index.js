import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {AuthenticationReducer} from "./AuthenticationReducer";

import {CharactersReducer} from "../components/Characters";

export default combineReducers({
    router: routerReducer,
    auth: AuthenticationReducer,

    charactersStore: CharactersReducer
});
