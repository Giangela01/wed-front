import React from 'react';

const RsvpEdit = ({ guests, match, edit }) => {
  const id = parseInt(match.params.id);
  const guest = guests.find((guest) => guest.id === id);


  return (
    <div>
      <h1 className='home-h1'>Hello {guest.firstName} {guest.lastName}!</h1>
      <div className='home-center'>
      <p className='font update-rsvp'>Thank you for responding to our invite.</p>
      <button className='btn  update-btn-rsvp' type="button" onClick={(event) => edit(guest)}>Update RSVP Status</button>
      </div>
    </div>
    );
};

export default RsvpEdit;