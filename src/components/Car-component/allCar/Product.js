import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './product.css'

const Product = (props) => {
    const { name, image, balance, } = props.product;
    return (
        <div>
            <div className='product'>
                <img src={image} alt="this is vaicale " />
                <h2> Name :{name}</h2>
                <p>Balance:{balance}</p>
                <button onClick={()=>props.handleClick(props.product)}>Add to card <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
            </div>
            
        </div>
    );
};

export default Product;