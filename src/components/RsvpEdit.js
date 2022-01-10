import React from 'react';

const RsvpEdit = ({ guests, match, edit }) => {
  console.log(guests)
  const id = parseInt(match.params.id);
  const guest = guests.find((guest) => guest.id === id);


  return (
    <div>
      <h1>Hi {guest.firstName} {guest.lastName}!</h1>
    </div>
    );
};

export default RsvpEdit;