import React from 'react';
import PropTypes from 'prop-types';


export function CardVideo({videoSource, text, url}){
    return(
        <div className="card">
            <img src={videoSource} alt=""/>
            <div className="card-body">
                <p className="card-text">
                    {
                        text ? text : 'Magna aute do velit excepteur ipsum aliquip deserunt dolor ullamco veniam consectetur anim. Et anim ex duis velit qui dolore. Irure in laboris dolore laborum cupidatat labore.'
                    }
                </p>
                <a href={url} className="btn btn-outline-primary rounded-0" target="_blank">Ver video</a>
            </div>
        </div>
    )
}

CardVideo.propTypes = {
    url: PropTypes.string,
    videoSource: PropTypes.string,
    text: PropTypes.string,
    tipo: PropTypes.string
}

// export default CardVideo