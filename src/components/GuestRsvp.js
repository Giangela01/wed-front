import React from 'react';
import { Link } from 'react-router-dom'

const GuestRsvp = ({guests}) => {
    const div = {
        display: "flex",
        border: "3px solid #E9A2A3",
        margin: "10px auto",
        width: "40%",
        padding: "10px",
        color: "black"
      };
    return (
    <div style={div}>
        <p className='font'><strong> Guest Name: {guests.firstName} {guests.lastName}</strong></p>        
        <Link to={`/rsvp/${guests.id}`}><button className='btn  update-btn-rsvp' type="button">Confirm RSVP</button></Link>
      </div>
      );
};

export default GuestRsvp;