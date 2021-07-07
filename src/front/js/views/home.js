import React from 'react';
// import { Link } from "react-router-dom";
import { CardContainer } from '../component/cardContainer.js';
import { Navbar } from '../component/navbar.js';
import { Slider } from '../component/slider.js';
import  {Footer}  from '../component/footer.js';

// import  FooterContainer  from '../cont/newfooter';

//Imágenes slider
import img1 from '../../../assets/s1.jpg';
import img2 from '../../../assets/s2.jpg';
import img3 from '../../../assets/barca-levante.jpeg';
import img4 from '../../../assets/s4.jpg';

//Imágenes noticias
import n1 from '../../../../src/assets/n1.jpg';
import n2 from '../../../../src/assets/n2.jpg';
import n3 from '../../../../src/assets/n3.jpg';
import n4 from '../../../../src/assets/n4.jpg';


//Imágenes patrocinadores
import lifutsal from '../../../../src/assets/lifutsal.jpg';
import sotela from '../../../../src/assets/sotela.jpg';
import quiros from '../../../../src/assets/quiros.jpg';
import candelas from '../../../../src/assets/candelas.jpg';

//create your first component
export const Home = () => {
	const cards = [
		{
			id: 1,
			tipo: 'a',
			title: 'Titulo',
			subtitle: 'Principios Defensivos',
			imageSource: img1,
			url: 'https://www.instagram.com/casotela/',
			text: 'Impartido por Carlos Sotela Leiva. 1 lección en cursos específicos. Curso aprendizaje de fundamentos defensivos. Costo: ¢35.000'
		},
		{
			id: 2,
			tipo: 'a',
			title: 'Titulo',
			subtitle: 'Principios Ofensivos',
			imageSource: img2,
			url: 'https://www.instagram.com/casotela/'
		},
		{
			id: 3,
			tipo: 'a',
			title: 'Titulo',
			subtitle: 'Principios Ofensivos',
			imageSource: img3,
			url: 'https://www.instagram.com/casotela/'
		},
		{
			id: 4,
			tipo: 'a',
			title: 'Titulo',
			subtitle: 'Principios Ofensivos',
			imageSource: img4,
			url: 'https://www.instagram.com/casotela/'
		}
	]
	
	const cardVideo = [
		{
			id: 1,
			tipo: 'b',
			title: 'Titulo',
			videoSource: img1,
			url: 'https://www.instagram.com/casotela/',
			text: 'Impartido por Carlos Sotela Leiva. 1 lección en cursos específicos. Curso aprendizaje de fundamentos defensivos. Costo: ¢35.000'
		},
		{
			id: 2,
			tipo: 'b',
			title: 'Titulo',
			videoSource: img2,
			url: 'https://www.instagram.com/casotela/',
			text: 'Impartido por Carlos Sotela Leiva. 1 lección en cursos específicos. Curso aprendizaje de fundamentos defensivos. Costo: ¢35.000'
		},
		{
			id: 3,
			tipo: 'b',
			title: 'Titulo',
			videoSource: img3,
			url: 'https://www.instagram.com/casotela/',
			text: 'Impartido por Carlos Sotela Leiva. 1 lección en cursos específicos. Curso aprendizaje de fundamentos defensivos. Costo: ¢35.000'
		},
		{
			id: 4,
			tipo: 'b',
			title: 'Titulo',
			videoSource: img4,
			url: 'https://www.instagram.com/casotela/',
			text: 'Impartido por Carlos Sotela Leiva. 1 lección en cursos específicos. Curso aprendizaje de fundamentos defensivos. Costo: ¢35.000'
		}
	]

	const cardBlog = [
		{
			id: 1,
			tipo: 'c',
			title: 'Titulo',
			subtitle: 'Cuando se gana desde el juego - Por Javier Codina',
			imageSource: img1,
			url: 'https://www.instagram.com/casotela/',
			text: 'En el Futsal como en la vida, las decisiones que tomamos están basadas en nuestros puntos de vista...'
		},
		{
			id: 2,
			tipo: 'c',
			title: 'Titulo',
			subtitle: 'Cuando se gana desde el juego - Por Javier Codina',
			imageSource: img2,
			url: 'https://www.instagram.com/casotela/',
			text: 'En el Futsal como en la vida, las decisiones que tomamos están basadas en nuestros puntos de vista...'
		},
		{
			id: 3,
			tipo: 'c',
			title: 'Titulo',
			subtitle: 'Cuando se gana desde el juego - Por Javier Codina',
			imageSource: img3,
			url: 'https://www.instagram.com/casotela/',
			text: 'En el Futsal como en la vida, las decisiones que tomamos están basadas en nuestros puntos de vista...'
		},
		{
			id: 4,
			tipo: 'c',
			title: 'Titulo',
			subtitle: 'Cuando se gana desde el juego - Por Javier Codina',
			imageSource: img4,
			url: 'https://www.instagram.com/casotela/',
			text: 'En el Futsal como en la vida, las decisiones que tomamos están basadas en nuestros puntos de vista...'
		}
	]

	
	const cardNoticias = [
		{
			id: 1,
			tipo: 'd',
			title: 'Titulo',
			subtitle: 'Cuando se gana desde el juego - Por Javier Codina',
			imageSource: n1,
			url: 'https://www.instagram.com/casotela/',
			text: 'En el Futsal como en la vida, las decisiones que tomamos están basadas en nuestros puntos de vista...'
		},
		{
			id: 2,
			tipo: 'd',
			title: 'Titulo',
			subtitle: 'Cuando se gana desde el juego - Por Javier Codina',
			imageSource: n2,
			url: 'https://www.instagram.com/casotela/',
			text: 'En el Futsal como en la vida, las decisiones que tomamos están basadas en nuestros puntos de vista...'
		},
		{
			id: 3,
			tipo: 'd',
			title: 'Titulo',
			subtitle: 'Cuando se gana desde el juego - Por Javier Codina',
			imageSource: n3,
			url: 'https://www.instagram.com/casotela/',
			text: 'En el Futsal como en la vida, las decisiones que tomamos están basadas en nuestros puntos de vista...'
		},
		{
			id: 4,
			tipo: 'd',
			title: 'Titulo',
			subtitle: 'Cuando se gana desde el juego - Por Javier Codina',
			imageSource: n4,
			url: 'https://www.instagram.com/casotela/',
			text: 'En el Futsal como en la vida, las decisiones que tomamos están basadas en nuestros puntos de vista...'
		}
	]

	const cardColaboradores = [
		{
			id: 1,
			tipo: 'e',
			title: 'Titulo',
			// subtitle: 'Cuando se gana desde el juego - Por Javier Codina',
			imageSource: lifutsal
		},
		{
			id: 2,
			tipo: 'e',
			title: 'Titulo',
			subtitle: 'Carlos Sotela Leiva',
			imageSource: sotela
		},
		{
			id: 3,
			tipo: 'e',
			title: 'Titulo',
			subtitle: 'Carlos Quirós',
			imageSource: quiros
		},
		{
			id: 4,
			tipo: 'e',
			title: 'Titulo',
			subtitle: 'Jesús Candelas Rodrigo',
			imageSource: candelas
		}
	]


	return (
		<div>
			{/* Se invoca el componente Navbar */}
			<Navbar />
			
			{/* Se invoca el componente Navbar */}
			<Slider />
			{/* Se invoca el componente CardInfo */}
			<CardContainer title="CAPACITACIONES Y CURSOS" cards={cards} />
			<CardContainer title="VIDEO ANÁLISIS" cards={cardVideo} />
			<CardContainer title="BLOG" cards={cardBlog} />
			<CardContainer title="NOTICIAS NACIONALES E INTERNACIONALES" cards={cardNoticias} />
			<CardContainer title="PATROCINADORES Y COLABORADORES" cards={cardColaboradores} />
			{/* Se invoca el componente Footer */}
			{/* <FooterContainer /> */}
			<Footer copyright="Copyright © My First React Website 2021" />
		</div>
	);
}