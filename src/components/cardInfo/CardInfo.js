import React from 'react';

const CardInfo = (props) => {
    const{name}=props.CardInfo
     return (
        <div>
            <h2>
                Name:{name}
             </h2>

            
        </div>
        ); 
};

export default CardInfo;