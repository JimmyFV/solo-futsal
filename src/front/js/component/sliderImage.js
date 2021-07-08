// import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/s1.jpg';
import img2 from '../../../assets/s2.jpg';
import img3 from '../../../assets/barca-levante.jpeg';
import img4 from '../../../assets/s4.jpg';

// SE DEBE HACER UN ARRAY PARA CADA SLIDE QUE CONTIENE RESPECTIVO TITULO, DESCRIPCION, URL, IMAGEN Y MENSAJE DE BOTON
export default [
    {
        title: 'Obtené tu pizarra personalizada',
        description: 'Explorá la variedad de nuestras pizarras disponibles',
        // urls: '',
        // tipo: 'a',
        image: img1,
    },
    {
        title: 'Second Slide',
        description: 'This is the Second Slider of our Carousel.',
        // urls: '',
        image: img2,
    },
    {
        title: 'Third Slide',
        description: 'This is the Third Slider of our Carousel.',
        // urls: '',
        image: img3,
    },
    {
        title: 'Fourth Slide',
        description: 'This is the Fourth Slider of our Carousel.',
        // urls: '',
        image: img4,
    }
];