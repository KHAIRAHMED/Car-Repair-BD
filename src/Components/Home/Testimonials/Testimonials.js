import React, { useEffect, useState } from 'react';
import Testimonialnfo from '../TestimonialInfo/Testimonialnfo';
import axios from 'axios';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        axios.get("https://afternoon-mesa-42742.herokuapp.com/review")
            .then(result => {
                setTestimonials(result.data)
            })
            .catch((error => console.log(error)))
    }, [])
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75">
                <div>
                    <h4 className="mt-5 mb-3" style={{ color: "#1CC7C1" }}>TESTIMONIALS</h4>
                    <h2 className="mb-5">What's Our Customer <br /> says</h2>
                </div>
                <div className="row">
                    {
                        testimonials.length ? <>
                            {
                                testimonials.map(testimonial => <Testimonialnfo testimonial={testimonial} key={testimonial._id}></Testimonialnfo>)
                            }
                        </>: "Not Found"
              }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;