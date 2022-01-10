import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ServiceDelete = ({ service }) => {
    const { title, price } = service
    const handleDelete = (e)=>{
        axios.delete(`https://afternoon-mesa-42742.herokuapp.com/serviceDelete/${e}`)
        .then(res => console(res.data))
        .catch(err=> alert("server error"))
    }
    const handleEdit = (e)=>{
        console.log("Edit",e);
    }
    return (
    <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td><FontAwesomeIcon icon={faEdit} color="green" style={{cursor:"pointer"}} onClick={()=>handleEdit(service._id)} /></td>
            <td><FontAwesomeIcon icon={faTrash} color="red" style={{cursor:"pointer"}} onClick={()=>handleDelete(service._id)} /></td>
    </tr>
    );
};

export default ServiceDelete;