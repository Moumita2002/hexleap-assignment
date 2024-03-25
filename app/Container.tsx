

import React from 'react';

interface ContainerProps {
  imageurl: string;
  text: string;
  tot: string;
  sport: string;
}

const Container: React.FC<ContainerProps> = ({ imageurl, text, tot, sport }) => {
     return (
        <div className='container'>
        <img className="imagestyle" src={imageurl}></img>
        <p className="txt">{text}</p>
        <div className='sub'>
            <span className='subtext'>
                <p className="event">Total Events</p>
                <p>{tot}</p>
            </span>
            <span className='subtext'>
                <p className="event">Sport</p>
                <p>{sport}</p>
            </span>
        </div>
    </div>
      
    );
  }
  
  export default Container;
