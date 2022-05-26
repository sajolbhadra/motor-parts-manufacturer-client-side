import React from 'react';
import { useParams } from 'react-router-dom';
import usePlaceOrder from '../../hooks/usePlaceOrder';

const PlaceOrder = () => {
    const [order] = usePlaceOrder({});
    const {id} = useParams();
    const {_id, name, img, description, price, quantity, supplierName } = order;

    const handleOrder = (event) => {
        event.preventDefault();
        const quantity = event.target.updateQuantity.value;
        const item = { quantity }
        //send data to server
        const url = `hhttps://stark-bastion-06570.herokuapp.com/item/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('success', data)
                alert('Order Placed Successfully');
                event.target.reset()
            })
        // console.log(item)
    };

    return (
        <div className='flex justify-center my-24 mx-24'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Quntity Available: {quantity}</p>
                <p>Supplier Name: {supplierName}</p>
                <p>Price/Unit: {price}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleOrder} className="btn btn-primary">Place Order</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PlaceOrder;