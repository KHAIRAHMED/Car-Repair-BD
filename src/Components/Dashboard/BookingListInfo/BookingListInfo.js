import React from 'react';

const BookingListInfo = ({ list }) => {
    const { service, action } = list
    const { title, description, image } = service
    return (
        <div className="col-md-4 col-sm-6 col-12 mt-5">
            <div style={{borderRadius:"10px" , background:"white"}} >
                <div className=" mt-1">
                    <div className="d-flex justify-content-between">
                        <div>
                            <img src={`data:image/png;base64,${image.img}`} className="img-fluid rounded-start" alt="service-img" />
                        </div>
                        <div className="ps-3">
                            <button className="btn text-white" style={{ background: `${action==="pending"?"red":"green"}`}} disabled>{action}</button>
                        </div>
                    </div>
                </div>
                <div className="text-black p-1">
                    <h6 >{title}</h6>
                    <p >{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookingListInfo;