import React from 'react';
import PropTypes from 'prop-types';


export function CardColaboradores({subtitle,imageSource}){
    return(
        <div className="card">
            <img src={imageSource} alt=""/>
            <div className="card-body">
                <h4 className="card-title">{subtitle}</h4>
            </div>
        </div>
    );
}

CardColaboradores.propTypes = {
    subtitle: PropTypes.string.isRequired,
    imageSource: PropTypes.string,
    tipo: PropTypes.string
}

