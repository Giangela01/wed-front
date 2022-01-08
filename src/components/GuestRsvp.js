import React from 'react';

const GuestRsvp = ({guests}) => {
    const div = {
        border: "3px solid #E9A2A3",
        margin: "10px auto",
        width: "75%",
        padding: "10px",
        color: "black"
      };
    return (
    <div style={div}>
        <p className='font'><strong>{guests.firstName} {guests.lastName}</strong></p>
      </div>
      );
};

export default GuestRsvp;