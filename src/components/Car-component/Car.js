import React from 'react';
import './car.css'
import CarData from './Cardata/CarData';
const Car = () => {
    return (
        <div className='Car-Container'>
            <section className='main-container'>
                <CarData></CarData>
            </section>
        </div>
    );
};

export default Car;