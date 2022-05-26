import React from 'react';
import useReviews from '../../hooks/useReviews';
import Banner from './Banner';
import Review from './Review';

const Home = () => {
    const [reviews] = useReviews();
    // console.log(reviews)
    return (
        <div>
            <Banner></Banner>
            {
                reviews.map(userReview => <Review
                key={userReview._id}
                userReview={userReview}
                ></Review>)
            }

            <Review></Review>
        </div>
    );
};

export default Home;