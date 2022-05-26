import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import ManageProductItem from './ManageProductItem';

const ManageProduct = () => {
    const [items, setItems] = useItems([]);
    

    const handleDeleteItems = (id) => {
        const action = window.confirm('Want to Delete This items? Ok To proceed');
        if(action){
            const url = `https://stark-bastion-06570.herokuapp.com/item/${id}`;
            fetch(url , {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(item => item._id !==id)
                setItems(remaining)
            })

        }
    }
    return (
        <div>
            <h2>Manage Product</h2>
            {
                items.map(item => <ManageProductItem
                    key={item._id}
                    item={item}
                    handleDeleteItems={handleDeleteItems}
                ></ManageProductItem>)
            }
        </div>
    );
};

export default ManageProduct;