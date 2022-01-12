import React, { useState } from 'react';
import UserNav from './UserNav'

const UserEdit = ({ initialUpdate, handleSubmit, buttonLabel, history }) => {
    const [formData, setFormData] = useState(initialUpdate);
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
      const handleSubmisson = (event) => {
        event.preventDefault();
        handleSubmit(formData);
        history.push("/announcements");
      };
    return (
      <>
    <UserNav />
    <div>
       <h4 className='img-title'>Make an Announcement</h4>
       <form onSubmit={handleSubmisson} className='edit-form'>
      <input
        type="text"
        onChange={handleChange}
        value={formData.subject}
        name="subject"
        placeholder='Subject'
      />
      <input
        className='textarea-size'
        type="text"
        onChange={handleChange}
        value={formData.caption}
        name="details"
        placeholder='Details on the Announcement'
      />
      <input type="submit" value={buttonLabel} className='btn-rsvp' />
    </form>
    <div className='home-center'>
    <a href="/user/view" rel="noreferrer"><button className='btn  btn-rsvp' type="button">Go Back to Dashboard</button></a>
    </div>
    </div>
    </>
    );
};

export default UserEdit;