import React from 'react';
import GuestRsvp from '../components/GuestRsvp'

const Rsvp = (props) => {
    return (
        props.guests.map((guests) => <GuestRsvp guests={guests} key={guests.id} />)
    );

};

export default Rsvp;