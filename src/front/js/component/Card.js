import React from 'react';
import PropTypes from 'prop-types';


export function Card({subtitle,imageSource, text, url}){
    return(
        <div className="card">
            <img src={imageSource} alt=""/>
            <div className="card-body">
                <h4 className="card-title">{subtitle}</h4>
                <p className="card-text">
                    {
                        text ? text : 'Magna aute do velit excepteur ipsum aliquip deserunt dolor ullamco veniam consectetur anim. Et anim ex duis velit qui dolore.'
                    }
                </p>
                <a href={url} className="btn btn-outline-primary rounded-0" target="_blank">Inscribirme</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    subtitle: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string,
    tipo: PropTypes.string
}

// export default Card