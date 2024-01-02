import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    // console.log(service);
    const { id, name, price, image, short_description } = service;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{short_description}</p>
                <p>Price: {price}</p>
                <div className="card-actions">
                    <Link to="/checkout">
                        <button className="btn btn-primary">Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;