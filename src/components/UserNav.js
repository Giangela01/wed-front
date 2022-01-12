import React from 'react';

const UserNav = () => {
    return <div className='bg-nav'><ul className='nav justify-content-center'>
    <li className='nav-item'>
      <a className='nav-link nav-btn draw-border' href="/user">Add Guest</a>
    </li>
    <li className='nav-item'>
      <a className='nav-link nav-btn draw-border' href="/user/view">Dashboard</a>
    </li>
    <li className='nav-item'>
      <a className='nav-link nav-btn draw-border' href="/user/update">Add Event Announcement</a>
    </li>
  </ul></div>
};

export default UserNav;