import React, { Component } from 'react';
import { Card } from '../component/Card.js';
import { CardVideo } from '../component/cardVideo.js';
import {CardBlog} from './cardBlog.js';
import {CardNoticias} from '../component/cardNoticias.js';
import {CardColaboradores} from '../component/cardColaboradores.js'
import PropTypes from "prop-types";
import './cards.css';

export const CardContainer = props => (
	<div>
		<h1>{props.title}</h1>
		<div className="row">
			{props.cards.map((card, index) => {
				if (card.tipo == "a") {
					return (
						<div className="col-md-3 mb-2 fondo-colaboradores" key={index}>
							<Card imageSource={card.imageSource} subtitle={card.subtitle} text={card.text} url={card.url} />
						</div>
					);
				} else if (card.tipo == "b") {
					return (
						<div className="col-md-3 mb-2" key={index}>
							<CardVideo videoSource={card.videoSource} text={card.text} url={card.url} />
						</div>
					);
				} else if (card.tipo == "c") {
					return (
						<div className="col-md-3 mb-2" key={index}>
							<CardBlog imageSource={card.imageSource} subtitle={card.subtitle} text={card.text} url={card.url} />
						</div>
					);
				} else if (card.tipo == "d") {
					return (
						<div className="col-md-3 mb-2" key={index}>
							<CardNoticias imageSource={card.imageSource} subtitle={card.subtitle} text={card.text} url={card.url} />
						</div>
					);
				} else{
					return (
						<div className="col-md-3 mb-2" key={index}>
							<CardColaboradores imageSource={card.imageSource} subtitle={card.subtitle} />
						</div>
					);
				} 
			})}
		</div>
		<hr />
	</div>
);

CardContainer.propTypes = {
	title: PropTypes.string,
	cards: PropTypes.array
};
