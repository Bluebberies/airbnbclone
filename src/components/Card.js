import React from 'react';
import '../index.css'

export default function Card(props){

    let badgeText;
    if(props.openSpots === 0){
        badgeText = 'SOLD OUT';
    }else if(props.location === 'Online'){
        badgeText = "ONLINE";
    }

    return(
        <div className='card'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={`/images/${props.coverImg}`} alt='katie' className='card--pic'/>
            <div className='info'>
                <img src='/images/star.png' alt='star' className='star'/>
                <span className='rating'>{props.stats.rating}</span>
                <span className='country'>(6) . {props.location}</span>
            </div>
            <h3 className='title'>{props.title}</h3>
            <div className='price-label'>
                <span className='price'>From ${props.price}</span>
                <span className='person'> / person</span> 
            </div>
        </div>
    )
}