import axios from "axios";

export const ProfileActions = {
    "PROFILE_GET": "PROFILE_GET"
};

export const getProfile = (username) => {
    return {
        type: ProfileActions.PROFILE_GET,
        payload: axios
            .get("/api/users/" + username)
            .then(response => {
                return response.data;
            })
            .catch(() => {
                // TODO
            })
    };
};
