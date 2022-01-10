import React from 'react';
import { useEffect, useContext, useState } from 'react';
import axios  from 'axios';
import { userContext } from './../../../App';
import BookingListInfo from '../BookingListInfo/BookingListInfo';

const BookingList = () => {
    const [userLoggedIn] = useContext(userContext)
    const [bookingList , setBookingList] = useState([])
    const {email} = userLoggedIn
    useEffect(() => {
        axios.post('https://afternoon-mesa-42742.herokuapp.com/getByServices', {email})
          .then(function (response) {
            // console.log(response.data);
            setBookingList(response.data)
          })
          .catch(function (error) {
              console.log(error)
          });
      }, [email])
    return (
        <section className="row w-100 ms-1">
            {
                bookingList.map(list => <BookingListInfo list={list} key={list._id} />)
            }
        </section>
    );
};

export default BookingList;