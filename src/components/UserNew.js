import React, { useState } from "react";
import UserNav from "./UserNav";

const UserNew = ({ initialAdd, handleAdd, buttonLabel, history }) => {
    const [formData, setFormData] = useState(initialAdd);
    
    const handleToggle = (event) => {
        setFormData(event.target.value = "true")
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmisson = (event) => {
        event.preventDefault();
        handleAdd(formData);
        setFormData(initialAdd);
    };
    return (
        <>
        <UserNav />
        <h1 className="home-h1">Add A Guest</h1>
        <form className='edit-form' onSubmit={handleSubmisson}>
        <label> First Name
        <input
            type="text"
            onChange={handleChange}
            value={formData.firstName}
            name="firstName"
        />
        </label> 
        <label> Last Name
        <input
            type="text"
            onChange={handleChange}
            value={formData.lastName}
            name="lastName"
        />
        </label> 
        <label>Email
        <input
            type="text"
            onChange={handleChange}
            value={formData.email}
            name="email"
        />
        </label>
        <label> Attending?
        <input
            type="checkbox"
            onClick={handleToggle}
            onChange={handleChange}
            value={formData.attend}
            name="attend"
        />
        </label>
        <label> Are you bring a plus one?
        <input
            type="checkbox"
            onClick={handleToggle}
            onChange={handleChange}
            value={formData.plusOne}
            name="plusOne"
        />
        </label>
        <input type="submit" value={buttonLabel} />
        </form>
        <div className='home-center'>
        <a href="/user/view" rel="noreferrer"><button className='btn  btn-rsvp' type="button">Go Back to Dashboard</button></a>
        </div>
        </>
    );
};

export default UserNew;