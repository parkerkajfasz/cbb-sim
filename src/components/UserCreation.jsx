import React from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../actions/userAction";
import { useNavigate } from "react-router";

function UserCreation() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onSubmit(event) {
        event.preventDefault(); // prevents page refresh
        const formData = new FormData(event.target);
        dispatch(createUser({
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName")
        }));
        navigate("/teamSelection");
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