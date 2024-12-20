import React from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../actions/userAction";

function UserCreation() {
    const dispatch = useDispatch();
    function onSubmit(event) {
        event.preventDefault(); // prevents page refresh
        const formData = new FormData(event.target);
        dispatch(createUser({
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName")
        }));

    };
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="firstName">Enter First Name</label>
            <input type="text" name= "firstName" id="firstName" required/>
            <label htmlFor="lastName">Enter Last Name</label>
            <input type="text" name= "lastName" id="lastName" required/>
            <button type="submit">Create Coach</button>
        </form>  
    );
};

export default UserCreation;