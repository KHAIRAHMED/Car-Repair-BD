import React, { useState, useContext, useEffect } from "react"
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios"
import { useParams } from "react-router-dom"
import { userContext } from "../../../App";
const Books = () => {
    const [service, setService] = useState({})
    const { id } = useParams();
    const [userLoggedIn] = useContext(userContext)
    const { email } = userLoggedIn
    useEffect(() => {
        axios.get(`https://afternoon-mesa-42742.herokuapp.com/serviceDetails/${id}`)
            .then(res => setService(res.data))
            .catch(err => console.log(err))
    }, [id])
    const makePayment = (token) => {
        const body = {
            token,
            service,
        }
        const headers = {
            "content-Type": "application/json"
        }
        return fetch("https://afternoon-mesa-42742.herokuapp.com/payment", {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
            .then(response => {
               if(response.status === 200){
                   alert("Payment Success")
               }
               else{
                   alert("Payment Error")
               }
            })
            .catch(err => alert("Server Error"))
    }
    // console.log(process.env.REACT_APP_KEY);
    return (
        <div className="text-center p-5">
            <h4 className="">If You Buy  {service.title} ,Please Enter Below Button And Pay  </h4>
            <StripeCheckout stripeKey={process.env.REACT_APP_KEY}
                // {process.env.REACT_APP_KEY}
                shippingAddress
                currency="USD"
                billingAddress
                email={email}
                allowRememberMe
                token={makePayment}
                amount={service.price * 100}
                name={service.title}
            >
                <button className="btn btn-warning btn-lg">{service.title} - ${service.price}</button>
            </ StripeCheckout>
        </div>
    );
};

export default Books;