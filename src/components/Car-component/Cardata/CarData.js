import React, { useEffect, useState } from 'react';
import CardInfo from '../../cardInfo/CardInfo';
import Product from '../allCar/Product';
import './cardata.css';

const CarData = () => {
    const [cars, setCar] = useState([]);
    const [cards, setCard] = useState([]);
    useEffect(() => {
        fetch('poduct.json')
            .then(res => res.json())
            .then(data => setCar(data))
    }, []);

    // handle event handeler
    const handleClick = (product) => {
        console.log(product)
          const NewCard = [...cards, product];
            setCard(NewCard);
    }
    const rendonChose = () => {
        console.log("props")
               
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
                    <h2> Total car : {cards.length}</h2>
                    {
                        cards.map(card => <CardInfo key={card.id}
                            CardInfo={card}
                        ></CardInfo>)

                    } 
                     <button onClick={rendonChose}> Chose one </button>
            </section>
            </div>
        </div>
    );
};

export default CarData;