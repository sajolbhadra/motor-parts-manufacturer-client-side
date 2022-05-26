import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const usePlaceOrder = () => {
    const {id} = useParams();
    const [order, setOrder] = useState({});
    useEffect( () => {
        fetch (`http://localhost:5000/item/${id}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [setOrder] )
    return [order, setOrder];
};

export default usePlaceOrder;