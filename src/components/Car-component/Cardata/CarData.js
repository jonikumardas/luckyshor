import React, { useEffect, useState } from 'react';
import Product from '../allCar/Product';
import './cardata.css'

const CarData = () => {
    const [cars, setCar] = useState([]);
    useEffect(() => {
        fetch('poduct.json')
            .then(res => res.json())
            .then(data => setCar(data))
    }, []);

    return (
        <div>
            <div className='product-container'>
            {
                cars.map(car => <Product key={car.id}
                product={car}
               ></Product>)
                }
                </div>
        </div>
    );
};

export default CarData;