import React from 'react';
import './checkout-item.styles.scss';

const ChekoutItem = ({ cartItem:{ name, price, quantity, imageUrl} })=>(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl}alt='item-image'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>&#10007;</div>
    </div>
)

export default ChekoutItem;