import React from 'react';

const GuestNav = (props) => {
    return <div classname="bg-nav"><ul className="nav justify-content-center">
    <li class="nav-item">
      <a className="nav-link nav-btn draw-border" href="/our-story">Our Story</a>
    </li>
    <li className="nav-item">
      <a className="nav-link nav-btn draw-border" href="/announcements">Event Announcements</a>
    </li>
    <li className="nav-item">
      <a className="nav-link nav-btn draw-border" href="/gallery">Gallery</a>
    </li>
    <li className="nav-item">
      <a className="nav-link nav-btn draw-border" href="/location">Getting There</a>
    </li>
    <li className="nav-item">
      <a className="nav-link nav-btn draw-border" href="/rsvp">RSVP</a>
    </li>
  </ul></div>
};

export default GuestNav;