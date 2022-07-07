import React, { useState } from 'react'

const Video = (props) => {
    // let rates = 0;
    const [rates, setRates] = useState(0);

    const handleClick = () => {
        // rates += 1;
        // console.log(rates);
        setRates(rates + 1);
    }

    return (
        <div className="video-container">
            <div className="video-image">
            <img src={props.thumbnail} alt="Same alt value" />
            </div>
            <div className="video-info">
            <h3>{props.title}</h3>
            <button onClick={handleClick}>Rate</button> {rates} stars
            <p>Upload date: {props.dateAdded}</p>
            <h4>Channel's Title: {props.channel}</h4>
            <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Video