import React from 'react';
import { Link } from 'react-router-dom';

const AddReview = () => {
    const handleAddReview = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const rating = event.target.rating.value;
        const review = event.target.review.value;
        const item = { name, rating, review }

        //send data to server
        fetch('http://localhost:5000/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
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
            <h2>Add Review</h2>
            <div>
                <h1 className='text-center bg-primary text-light py-2 '>Add to Inventory</h1>
                <h1 className='text-center my-5'>Fill Data</h1>
                <form onSubmit={handleAddReview} className="text-center my-5">

                    <input type="text" className='w-50 my-1 px-3 py-1 border rounded-pill text-primary' name="name" placeholder='name' required /> <br />
                    <input type="text" className='w-50 my-1 px-3 py-1 border rounded-pill text-primary' name="rating" placeholder='rating' required /> <br />
                    <input type="text" className='w-50 my-1 px-3 py-1 border rounded-pill text-primary' name="review" placeholder='Your Review' required /> <br />
                    <input type="submit" className='my-2' value="Submit" />
                </form>

                <div className='text-center my-5 ' >
                    <Link to='/manage-inventory' className='btn btn-primary' >Manage Inventory</Link>
                </div>
            </div>
        </div>

    );
};

export default AddReview;