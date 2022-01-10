import React, { useEffect, useState } from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import axios from 'axios';


const Services = () => {
    const [servicesData, setServicesData] = useState([])
    useEffect(() => {
        axios.get("https://afternoon-mesa-42742.herokuapp.com/services")
            .then(result => {
                setServicesData(result.data)
            })
            .catch((error => console.log(error)))
    }, [])
    return (
        <section className="mb-5">
            <div className="d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h1 className="text-success">AUTO REPAIR SERVICES</h1>
                    <p className="text-secondary">We offer a full range of garage services to vehicle owners located in Tucson area. <br />
                        Our professinals know how to handle a wide range of car services.</p>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="row" style={{ width: "90%" }}>
                    {
                        servicesData.length ? <>
                            {
                                servicesData.map(service => <ServiceInfo key={service._id} service={service}></ServiceInfo>)
                            }
                        </>:<>
                            <h5 className="text-danger text-center">Service Not Found</h5>
                        </>
                   }
                </div>
            </div>

        </section>
    );
};

export default Services;