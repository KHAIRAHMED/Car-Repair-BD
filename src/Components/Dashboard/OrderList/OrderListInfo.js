import React, { useState } from 'react';
import axios from 'axios';

const OrderListInfo = ({ list }) => {
    // const [pending , setPending] = useState("pending")
    // const [onGoing , setOngoing] = useState("On-Going")
    // const [done , setDone] = useState("Done")
    const { service, action, email, source,payment_method_details , _id } = list
    const { name } = source
    const { title } = service
    const{type} =payment_method_details
    const handleOnChange = (e) => {
        const newAction = e.target.value
        axios.patch(`https://afternoon-mesa-42742.herokuapp.com/action/${_id}`, {newAction})
        .then(res => {
            console.log(res);
        })
        .catch(err =>alert("Server Error"))
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{title}</td>
            <td>{type}</td>
            <td>
                {
                    <select onChange={handleOnChange} className="form-select" aria-label="Default select example">
                       <option value="Done" selected={"Done" === action} >Done</option>
                        <option value="On-Going" selected={"On-Going" === action} >On-Going</option>
                        <option value="pending" selected={"pending" === action} > pending </option>
                    </select>
                }
            </td>
        </tr>
    );
};

export default OrderListInfo;