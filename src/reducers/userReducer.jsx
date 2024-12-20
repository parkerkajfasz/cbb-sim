import React from "react";

let user = {
    firstName: null,
    lastName: null
};

export default function userReducer(state = user, action) {
    switch (action.type) {
        case "CREATE_USER":
            return {
                ...state,
                user: {
                    firstName: firstName,
                    lastName, lastName
                }
            }
        default:
            console.log("Action type not found. Returning original state.")
            return state;
    };
};


