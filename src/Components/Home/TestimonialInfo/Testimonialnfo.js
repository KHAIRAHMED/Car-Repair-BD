import React from 'react';

const Testimonialnfo = ({testimonial}) => {
    const {review , img , name , city} = testimonial
    return (
        <div className="col-md-4 col-lg-3 col-sm-6 col-12 mt-3">
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <div>
                        <img src={img} alt="patient comment" style={{borderRadius:"50%"}} />
                    </div>
                    <div className="ps-2">
                        <h6 style={{color:"#10CFE4"}}>{name}</h6>
                        <p>{city}</p>
                    </div>
                </div>
                <p>{review}</p>
            </div>
        </div>
    </div>
    );
};

export default Testimonialnfo;