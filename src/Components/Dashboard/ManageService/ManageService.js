import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import ServiceDelete from './ServiceDelete';
import ServiceDelete from './ServiceDelete';

const ManageService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get("https://afternoon-mesa-42742.herokuapp.com/services")
            .then(res => setServices(res.data))
            .catch(err => alert("service error"))
    }, [])
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services?.map(service => <ServiceDelete service={service} key={service._id} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageService;