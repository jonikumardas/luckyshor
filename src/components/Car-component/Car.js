import React from 'react';
import './car.css'
import CarData from './Cardata/CarData';
const Car = () => {
    return (
        <div className='Car-Container'>
            <section className='main-container'>
                <CarData></CarData>
            </section>

            <section className='details-container'>
                <h1> Details section </h1>
            </section>
        </div>
    );
};

export default Car;