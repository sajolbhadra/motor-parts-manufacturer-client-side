import React from 'react';
import { Link } from 'react-router-dom';

const AddReview = () => {
    const handleAddReview = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const rating = event.target.rating.value;
        const review = event.target.review.value;
        const reviews = { name, rating, review }
        console.log(reviews)
        //send data to server
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('review Added Successfuly');
                event.target.reset()
            })
    }
    return (
        <div>
            <h1 className='text-center bg-primary text-light py-2 '>Add Review</h1>
            <h1 className='text-center my-5'>Fill Data</h1>
            <form onSubmit={handleAddReview} className="text-center my-5">
                <input type="text" className='w-50 my-1 px-3 py-1 border rounded-pill text-primary' name="name" placeholder='name' required /> <br />
                <input type="number" className='w-50 my-1 px-3 py-1 border rounded-pill text-primary' name="rating" placeholder='rating' required /> <br />
                <input type="text" className='w-50 my-1 px-3 py-1 border rounded-pill text-primary' name="review" placeholder='Your Review' required /> <br />
                <input type="submit" className='my-2 btn' value="Submit" />
            </form>
        </div>


    );
};

export default AddReview;