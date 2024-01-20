import React from 'react';
import './styles.css';

export function Card({name,age,location,followers,likes,nopic}){
    return <div className='main'>
        
        <div className='blue'>

        </div>
        <div className='img'>
            Hi3 
            <image src="C:\Users\balan\OneDrive\Desktop\100xdevs\w71\exp\src\assets\profile-pic.png"></image>
        </div>
        <div className='white'>
            <div className="p1">
                <h2><b>{name}</b></h2>
                <h2>{age}</h2>
                
            </div>
            <div className="p2"><h4>{location}</h4></div>
            <div className="p3">
                <h2>{followers}</h2>
                <h2>{likes}</h2>
                <h2>{nopic}</h2>

            </div>
        </div>

    </div>
}