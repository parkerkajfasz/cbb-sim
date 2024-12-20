import React from "react";

function UserCreation() {
    function onSubmit(event) {
        event.preventDefault(); // prevents page refresh
        const formData = new FormData(event.target);
        const firstName = formData.get("firstName");
        // alert(firstName)
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