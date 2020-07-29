import React from 'react';
import './Description.css';

function Description(props) {
    return (
        <>
        <div className="description">
            <h1>{props.children}</h1>
            <h3>Lorem ipsum dolor sit amet</h3>
        </div>
        <p className="dscPrgh">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua</p>
        </>
    )
};

export default Description;