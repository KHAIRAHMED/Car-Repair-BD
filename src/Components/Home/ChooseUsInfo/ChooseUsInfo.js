import React from 'react';

const ChooseUsInfo = ({ choose }) => {
    const { title, description, img } = choose
    return (
        <div className="col-md-4 col-sm-6 col-12 mt-3" >
                <div className="text-center">
                    <img src={img} alt="choose us img" className="img-fluid" style={{ width: "100px" }} />
                    <h4 className="mt-3 text-info">{title}</h4>
                    <p className="mt-3">{description}</p>
                </div>
        </div>
    );
};

export default ChooseUsInfo;