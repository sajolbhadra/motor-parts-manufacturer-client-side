import React, { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://stark-bastion-06570.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [setReviews]);
    return ([reviews, setReviews]
    );
};

export default useReviews;