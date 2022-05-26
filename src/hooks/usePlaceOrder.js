import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const usePlaceOrder = () => {
    const {id} = useParams();
    const [order, setOrder] = useState({});
    useEffect( () => {
        fetch (`https://stark-bastion-06570.herokuapp.com/item/${id}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [setOrder] )
    return [order, setOrder];
};

export default usePlaceOrder;