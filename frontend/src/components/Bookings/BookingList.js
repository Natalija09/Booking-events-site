import React from 'react'
import './BookingList.css'


const BookingList = props => (
    <ul className="bookings">
        {props.bookings.map(booking => {
            return (
            <li key={booking._id} className="bookings-item">
                <div className="bookings-item-data">
                    {booking.event.title + "-"}
                    {new Date(booking.createdAt).toLocaleDateString()}
                </div>
                <div className="bookings-actions">
                    <button className="btn" onClick={props.onDelete.bind(this, booking._id)}>Cancel</button>
                </div>
            </li>
            )
        })}
    </ul>

)

export default BookingList