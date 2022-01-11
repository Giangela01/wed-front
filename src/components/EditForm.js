import React, { useState } from "react";
import { Switch } from 'antd';

const Form = ({ initialGuest, handleSubmit, buttonLabel, history }) => {
    const [toggle, setToggle] = useState(initialGuest)
    const [formData, setFormData] = useState(initialGuest);

    const toggler =() => setToggle(toggle = !toggle);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmisson = (event) => {
        event.preventDefault();
        handleSubmit(formData);
        history.push("/rsvp");
    };
    return (
        <>
        <h1>{formData.firstName} {formData.lastName}</h1>
        <form onSubmit={handleSubmisson}>
        <input
            type="text"
            onChange={handleChange}
            value={formData.email}
            name="email"
        />
        <Switch 
        onClick={toggler} 
        onChange={handleChange}
        value={formData.plusOne}
        name="plusOne"/>
        <input type="submit" value={buttonLabel} />
        </form>
        </>
    );
};

export default Form;