import React from 'react';
import Banner from './Banner';
import Items from './Items';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;