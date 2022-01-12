import React, { useState } from "react";

const Form = ({ initialGuest, handleSubmit, buttonLabel, history }) => {
    const [formData, setFormData] = useState(initialGuest);

    // const toggleChecked = () => setFormData(formData.plusOne = true);
    
    const handleToggle = (event) => {
        setFormData(event.target.value = "true")
    };

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
        <h1 className="home-h1">{formData.firstName} {formData.lastName}</h1>
        <form className='edit-form' onSubmit={handleSubmisson}>
        <label> Update Email
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
        <label> Message for the Couple:
        <textarea
            type="text"
            onChange={handleChange}
            value={formData.comment}
            name="comment"
        />
        </label>
        <input type="submit" value={buttonLabel} />
        </form>
        </>
    );
};

export default Form;