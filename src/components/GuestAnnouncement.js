import React from 'react';

const GuestAnnouncement = ({updates}) => {
    
    const div = {
        border: "3px solid #E9A2A3",
        margin: "10px auto",
        width: "75%",
        padding: "10px",
        color: "black"
      };
    return (
    <div style={div}>
        
        <h4>Announcement {updates.id}:</h4>
        <p className='font'><strong>{updates.subject}</strong></p>
        <p className='font'>{updates.caption}</p>
        <p title={ updates.created_at }>
            {new Intl.DateTimeFormat('en-GB', { 
                month: 'long', 
                day: '2-digit',
                year: 'numeric', 
            }).format(new Date(updates.created_at))}
      </p>
      </div>
      );
};

export default GuestAnnouncement;