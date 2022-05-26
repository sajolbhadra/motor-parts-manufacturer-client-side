import React from 'react';
import useItems from '../../hooks/useItems';
import Item from './Item';

const Items = () => {
    const [items] = useItems([]);
    return (
        <div>
            <h1 className='text-3xl font-bold flex justify-center my-4 mt-24'>Items</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-24 mt-4  mb-24'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;