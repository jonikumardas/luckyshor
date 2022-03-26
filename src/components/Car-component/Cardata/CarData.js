import React, { useEffect, useState } from 'react';
import Product from '../allCar/Product';
import './cardata.css'

const CarData = () => {
    const [cars, setCar] = useState([]);
    const [cards, setCard] = useState([]);
    useEffect(() => {
        fetch('poduct.json')
            .then(res => res.json())
            .then(data => setCar(data))
    }, []);
    const handleClick = (product) => {
        // console.log(product);
        const NewCard = [...cards, product];
        console.log(NewCard);
        setCard(NewCard);
    }
    

    return (
        <div className='container'>
            <div className='product-container'>
            {
                cars.map(car => <Product key={car.id}
                product={car}
               handleClick={handleClick}></Product>)
            }
            </div>

            <div className='details-container'>
            <section className='container-product'>
                    <h2> Details section </h2>
                    <h2> Call data :{cards.length}</h2>
                    {
                        cards.map(card=> <h3>Name:{card.name}</h3>)
                    }
                   
            </section>
            </div>
        </div>
    );
};

export default CarData;