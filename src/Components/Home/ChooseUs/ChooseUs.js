import React from 'react';
import img1 from "../../../images/PROFESSIONAL-STANDARDS.png"
import img2 from "../../../images/EVERY-JOB-IS-PERSONAL.png"
import img3 from "../../../images/BEST-MATERIALS.png"
import ChooseUsInfo from '../ChooseUsInfo/ChooseUsInfo';

const chooseUs = [
    {
        title: "EVERY JOB IS PERSONAL",
        description: "If you want the quality you would expect from the dealership, but with a more personal and friendly atmosphere, you have found it.",
        img: img2
    },
    {
        title: "BEST MATERIALS",
        description: "We have invested in all the latest specialist tools and diagnostic software that is specifically tailored for the software in your vehicle.",
        img: img3
    },
    {
        title: "PROFESSIONAL STANDARDS",
        description: "Our auto repair shop is capable of servicing a variety of models. We only do the work that is needed to fix your problem.",
        img: img1
    }
]
const ChooseUs = () => {
    return (
        <section className="my-5">
            <div className="d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h1 className="text-success">Why Choose Us</h1>
                    <p className="text-secondary">We are one of the leading auto repair shops serving customers in Tucson.
                  <br />  All mechanic services are performed by highly qualified mechanics.</p>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="row" style={{ width: "90%" }}>
                    {
                        chooseUs.map(choose => <ChooseUsInfo key={choose.title} choose={choose}></ChooseUsInfo>)
                    }
                </div>
            </div>

        </section>
    );
};

export default ChooseUs;