import React from 'react';

const ManageProductItem = (props) => {
    const { _id, name, img, description, price, quantity, supplierName } = props.item;
    const { handleDeleteItems } = props;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mx-4 my-4">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Quntity Available: {quantity}</p>
                <p>Supplier Name: {supplierName}</p>
                <p>Price/unit: {price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDeleteItems(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageProductItem;