import React from "react";

let user = {
    firstName: null,
    lastName: null
};

export default function userReducer(state = user, action) {
    switch (action.type) {
        case "CREATE_USER":
            const { firstName, lastName } = action.payload;
            console.log("New User Created:", { firstName, lastName }); // Log the new user data
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            };
        default:
            console.log("Action type not found. Returning original state.")
            return state;
    };
};


