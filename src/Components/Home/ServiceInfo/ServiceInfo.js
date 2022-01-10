import React from 'react';
import { Link } from 'react-router-dom';

const ServiceInfo = ({ service }) => {
    const { title, description, image , price, _id } = service
    return (
        <div className="col-md-4 col-sm-6 mt-4">
            <div className="card" style={{}}>
                <img src={`data:image/png;base64,${image.img}`} className="card-img-top" alt={title} />
                <Link to={`/dashboard/book/${_id}`} className="btn btn-outline-warning text-black">{price}</Link>
            </div>
        </div>
    );
};

export default ServiceInfo;