import React from 'react';
import PP from './../../image/PP.jpg'
import project9 from './../../image/project9.png'
import project10 from './../../image/project10.png'
import project11 from './../../image/project11.png'


const Portfolio = () => {
    return (
        <div>
            <div className='flex justify-center my-24 '>
                <div className="card lg:card-side bg-base-100 shadow-xl ">
                    <figure ><img src={PP} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: Sajol Bhadra</h2>
                        <h2 className="card-title">E-Mail: sajolbhadra@gmail.com</h2>
                        <h2 className="card-title">Education-</h2>
                        <p> BSc in Engineering in EEE, North Western University <br />
                            Diploma In Engineering in Electronics </p>
                        <p className="card-title">list of technologies</p>
                        <p>React <br /> NodeJs <br /> MongoDB <br />Github <br />CSS Framesworks: Bootstrap, MaterialUI, TailwindCSS, DaisyUI
                            <br /> Authentication: Firebase <br /> Hosting: Netlify, Firebase</p>
                        <div className="card-actions justify-end">
                            <a href="https://github.com/sajolbhadra" className="btn btn-primary">Github</a>
                        </div>
                    </div>
                </div>

            </div>
            <h1 className='text-4xl font-bold my-16 flex justify-center '>My Projects</h1>
            <div className='flex justify-center my-24 '>
                <div className='grid grid-cols-3  gap-16'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-5">
                        <figure><img src={project11} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Electronics WareHouse</h2>
                            <p>This site is for inventory Managment </p>
                            <div className="card-actions justify-end">
                                <a href='https://ent-warehouse.web.app/' className="btn btn-primary">Live Site</a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-5">
                        <figure><img src={project10} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Solo Traveler</h2>
                            <p>This site is related to Traveling </p>
                            <div className="card-actions justify-end">
                                <a href='https://service-provider7.web.app/' className="btn btn-primary">Live Site</a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-5">
                        <figure><img src={project9} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Gamers Pulse</h2>
                            <p>This site is for Review and Analysis Statistics</p>
                            <div className="card-actions justify-end">
                                <a href='https://gamers-pulse.netlify.app/' className="btn btn-primary">Live Site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;