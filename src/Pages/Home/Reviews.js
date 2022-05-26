import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews([]);

    return (
        <div>
                        <h1 className='text-3xl font-bold flex justify-center my-4 mt-24'>Review</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-24 mt-4  mb-24'>
                {
                    reviews.map(userReview => <Review
                        key={userReview._id}
                        userReview={userReview}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;