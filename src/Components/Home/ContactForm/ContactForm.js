import React from 'react';

const ContactForm = () => {
    return (
        <section className="contactFrom-section text-center my-5" style={{ background: "gray" }}>
            <div className="py-4">
                <h3 style={{ color: "#11D0DD" }} className="mt-5" >CONTACT US</h3>
                <h2 className="text-white">Always Contact With us</h2>
            </div>
            <div className="d-flex justify-content-center">
                <form className="w-75">
                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <input type="text" className="form-control" placeholder="Enter Full Name" />
                        </div>
                        <div className="mb-3 col-md-6">
                            <input type="text" className="form-control" placeholder="Phone Number*" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <input type="text" className="form-control" placeholder="Subject" />
                        </div>
                        <div className="mb-3 col-md-6">
                            <input type="email" className="form-control" placeholder="Enter Your Email*" />
                        </div>
                    </div>

                    <div className="mb-3">
                        <textarea className="form-control" rows="6" placeholder="Your Message*"></textarea>
                    </div>
                    <button className="btn btn-primary mb-5">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;