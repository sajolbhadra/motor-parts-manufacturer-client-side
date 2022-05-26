import React from 'react';

const Blog = () => {
    return (
        <div>

            <div className="grid grid-cols-2   md:grid-cols-2 sm:grid-cols-1 ">
                <div className='mx-5 my-5 px-5 py-5 space-x-5 border border-black rounded-lg'>
                    <h3 className='text-3xl bold my-4 font-bold'>How will you improve the performance of a React Application</h3>
                    <p className='py-3 font-medium flex flex-col text-justify'>Improve the performance of a React Application application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged. five important ways to optimize the performance of a React application, including pre-optimization techniques. These include. Optimizing performance in a React application.
                    </p>
                    <ol>
                        <li>Keeping component state local where necessary.
                        </li>
                        <li>Memoizing React components to prevent unnecessary re-renders.</li>
                        <li>Code-splitting in React using dynamic import()</li>
                        <li>Windowing or list virtualization in React.Windowing or list virtualization in React.</li>
                        <li>Lazy loading images in React.</li>
                    </ol>
                </div>
                <div className='mx-5 my-5 px-5 py-5 space-x-5 border border-black rounded-lg'>
                    <h3  className='text-3xl bold my-4 font-bold'>What are the different ways to manage a state in a React Application</h3>
                    <p className='py-3 font-medium flex flex-col text-justify'>
                        There are four main types of state you need to properly manage in your React apps: <br />
                        Local state. <br />
                        Global state. <br />
                        Server state. <br />
                        URL state <br />

                        Local (UI) state – Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.

                        Global (UI) state – Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                        Server state – Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI states.
                        URL state – Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.
                    </p>
                </div>
                <div className='mx-5 my-5 px-5 py-5 space-x-5 border border-black rounded-lg'>
                    <h3  className='text-3xl bold my-4 font-bold'>How does prototypical inheritance work</h3>
                    <p className='py-3 font-medium flex flex-col text-justify'>When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
                        In programming, we often want to take something and extend it. For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it.
                    </p>
                </div>
                <div className='mx-5 my-5 px-5 py-5 space-x-5 border border-black rounded-lg'>
                    <h3  className='text-3xl bold my-4 font-bold'>Why you do not set the state directly in React. For exmaple, if you have const[products, , setProducts] = useState([]) why you do not set products = [...] instead you use the setProducts</h3>
                    <p className='py-3 font-medium flex flex-col text-justify'></p>
                </div>
                <div className='mx-5 my-5 px-5 py-5 space-x-5 border border-black rounded-lg'>
                    <h3  className='text-3xl bold my-4 font-bold'>You have an array of products. Each object has a name, price, description etc. How will you implement a search to find products by name?</h3>
                    <p className='py-3 font-medium flex flex-col text-justify'></p>
                </div >
                <div className='mx-5 my-5 px-5 py-5 space-x-5 border border-black rounded-lg'>
                    <h3  className='text-3xl bold my-4 font-bold'>What is a Unit test? Why should write unit tests</h3>
                    <p className='py-3 font-medium flex flex-col text-justify'>We know that Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.
                        I should write a unit test because one of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;