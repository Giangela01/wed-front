import React from 'react';
import { Link } from 'react-router-dom'
// import Table from './Table'

const UserMain = (props) => {
    return (
        props.guests.map((guests) => { 
            const deleteId = () => {props.deleteGuest(guests)};
            return (
        <div><table>
            <thead>
            <tr>
                <th>Guest Name</th>
                <th>Email</th>
                <th>Attending</th>
                <th>+ 1</th>
                <th>Messages</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody><tr>
                <td>{guests.firstName} {guests.lastName}</td>
                <td>{guests.email}</td>
                <td>{guests.attend ? "Yes" : "No"}</td>
                <td>{guests.plusOne ? "Yes" : "No"}</td>
                <td>{guests.comment}</td>
                <td><Link to={`/rsvp/${guests.id}`}><button className='btn  update-btn-rsvp' type="button">Confirm RSVP</button></Link>               
                <button className='btn  update-btn-rsvp' type="button" onClick={deleteId}>Delete RSVP</button></td>
            </tr>
            </tbody>
            </table> 
      </div>
            );
        })
    );
};
export default UserMain;