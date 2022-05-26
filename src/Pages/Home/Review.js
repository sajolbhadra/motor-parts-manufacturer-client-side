import React from 'react';
import useReviews from '../../hooks/useReviews';

const Review = ({userReview}) => {
    // const {reviews} = useReviews([]);
    // console.log(userReview)
    // const {name, rating, review} = userReview;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            {/* <div className="card-body">
                <h2 className="card-title">{userReview.name}</h2>
                <p>{userReview.review}</p>
                <div className="card-actions justify-end">
                </div>
            </div> */}
        </div>
    );
};

export default Review;