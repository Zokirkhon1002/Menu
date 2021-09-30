import React from 'react';
import CatagoryItem from './CatagoryItem';

function CatagoryList({catalog = []}) {
    return (
        <div className="list">
            {catalog.map(el=>(
                <CatagoryItem key={el.idCategory} {...el} />
            ))}
        </div>
    );
}

export default CatagoryList;