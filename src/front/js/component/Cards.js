import React from 'react';
import Card from './Card.js';
import img1 from '../../../assets/s1.jpg';
import img2 from '../../../assets/s2.jpg';
import img3 from '../../../assets/s3.jpeg';
import img4 from '../../../assets/s4.jpg';

const cards = [
    {
        id: 1,
        title: 'Principios Defensivos',
        image: img1,
        url: 'https://www.instagram.com/casotela/',
        text: 'Impartido por Carlos Sotela Leiva. 1 lección en cursos específicos. Curso aprendizaje de fundamentos defensivos. Costo: ¢35.000'
    },
    {
        id: 2,
        title: 'Principios Ofensivos',
        image: img2,
        url: 'https://www.instagram.com/casotela/'
    },
    {
        id: 3,
        title: 'Triángulos Defensivos',
        image: img3,
        url: 'https://www.instagram.com/casotela/'
    },
    {
        id: 4,
        title: 'Desde la base',
        image: img4,
        url: 'https://www.instagram.com/casotela/'
    }
]

export function Cards(){
    return(
        <div className="container-fluid mt-3 mb-3">
            <h3 className="card-title text-black">CAPACITACIONES Y CURSOS</h3>
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-3" key={card.id}>
                            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

