import {CharactersActions} from "./CharactersActions";

const initial = {
    characters: [],
    fetching: false
};

export const CharactersReducer = (state = initial, action) => {
    switch (action.type) {
        case `${CharactersActions.CHARACTERS_GET}_PENDING`:
            return {
                ...state,
                fetching: true
            };
        case `${CharactersActions.CHARACTERS_GET}_REJECTED`:
            return {
                ...state,
                fetching: false
            };
        case `${CharactersActions.CHARACTERS_GET}_FULFILLED`:
            return {
                ...state,
                fetching: false,
                characters: action.payload
            };
    }

    return {...state};
};