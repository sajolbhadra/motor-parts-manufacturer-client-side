import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const { _id, name, img, description, quantity, supplierName, price } = item;
    return (
        // <div className="card card-side bg-base-100 shadow-xl">
        //     <figure><img src={img} alt="Movie"/></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{name}</h2>
        //         <p>{description}</p>
        //         <p>Quntity Available: {quantity}</p>
        //         <p>Supplier Name: {supplierName}</p>
        //         <div className="card-actions justify-end">
        //             <Link to={`order/${_id}`} className="btn btn-primary">Place Order</Link>
        //         </div>
        //     </div>
        // </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Quntity Available: {quantity}</p>
                <p>Supplier Name: {supplierName}</p>
                <p>Price/unit: {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`order/${_id}`} className="btn btn-primary">Order</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;