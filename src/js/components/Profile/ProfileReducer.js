import {ProfileActions} from "./ProfileActions";

const initial = {
    profile: null,
    fetching: false
};

export const ProfileReducer = (state = initial, action) => {
    switch (action.type) {
        case `${ProfileActions.PROFILE_GET}_PENDING`:
            return {
                ...state,
                fetching: true
            };
        case `${ProfileActions.PROFILE_GET}_REJECTED`:
            return {
                ...state,
                fetching: false
            };
        case `${ProfileActions.PROFILE_GET}_FULFILLED`:
            return {
                ...state,
                fetching: false,
                profile: action.payload
            };
    }

    return {...state};
};