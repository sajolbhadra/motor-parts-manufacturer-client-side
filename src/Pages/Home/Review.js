import React from 'react';

const Review = (props) => {
    const { name, rating, review } = props.userReview;

    return (
        <div className="card bg-base-100 shadow-xl ">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Review: {review}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default Review;