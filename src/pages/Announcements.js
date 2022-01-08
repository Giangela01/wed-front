import React from 'react';
import GuestAnnouncement from '../components/GuestAnnouncement';

const Announcements = (props) => {
    return (
        props.updates.map((updates) => <GuestAnnouncement updates={updates} key={updates.id} />)
    );

};

export default Announcements;