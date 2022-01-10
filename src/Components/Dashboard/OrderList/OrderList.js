import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import "./OrderList.css"
import axios from "axios"
import OrderListInfo from './OrderListInfo';
const OrderList = () => {
    const [userLoggedIn] = useContext(userContext)
    const [bookingList, setBookingList] = useState([])
    const { email } = userLoggedIn
    useEffect(() => {
        axios.post('https://afternoon-mesa-42742.herokuapp.com/getByServices', { email })
            .then(function (response) {
                setBookingList(response.data)
            })
            .catch(function (error) {
                console.log(error)
            });
    }, [email])
    return (
        <div>
            <div className="table-responsive" >
                <table className="table">
                    {/* <thead> */}
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Service</th>
                        <th>Pay-With</th>
                        <th>Status</th>
                    </tr>
                    {/* </thead> */}
                    {/* <tbody> */}
                    {
                        bookingList.map(list => <OrderListInfo list={list} key={list._id} />)
                    }
                    {/* </tbody> */}
                </table>
            </div>
        </div>


    );
};

export default OrderList;