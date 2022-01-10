import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <section id="" className="img-fluid d-flex justify-content-center align-items-center header-section">
            <div className="w-75 header-content text-white">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quidem sint, expedita consequuntur, ducimus pariatur reprehenderit ipsum iure obcaecati voluptates animi ex laudantium porro vitae eveniet quae sequi dolorem magni architecto ullam enim mollitia, repudiandae eos molestias? Tenetur libero dolorum, rem reprehenderit obcaecati ea quae provident quidem culpa excepturi dolorem, nobis nesciunt explicabo ipsam quis. Fugiat ducimus similique quas nostrum.</p>
                <Link to="/services" className="btn btn-primary" > Services </Link>
            </div>
        </section>
    );
};

export default Header;