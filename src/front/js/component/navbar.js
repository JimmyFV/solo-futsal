import React, {useState, useEffect} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import './navbar.css';


// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
  
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
  
	const showButton = () => {
	  if (window.innerWidth <= 960) {
		setButton(false);
	  } else {
		setButton(true);
	  }
	};
  
	useEffect(() => {
	  showButton();
	}, []);
  
	window.addEventListener('resize', showButton);
  
	return (
	  <>
		<nav className='navbar'>
		  <div className='navbar-container'>
			<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
			  {/* SOLOFUTSAL
			  <i class='fab fa-typo3' /> */}
			  <img src={logo} alt=""/>
			</Link>
			<div className='menu-icon' onClick={handleClick}>
			  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
			</div>
			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
			  <li className='nav-item'>
				<Link to='/' className='nav-links' onClick={closeMobileMenu}>
				  Home
				</Link>
			  </li>
			  <li className='nav-item'>
				<Link
				  to='/formacion'
				  className='nav-links'
				  onClick={closeMobileMenu}
				>
				  Formación
				</Link>
			  </li>
			  <li className='nav-item'>
				<Link
				  to='/noticias'
				  className='nav-links'
				  onClick={closeMobileMenu}
				>
				  Noticias
				</Link>
			  </li>
			  <li className='nav-item'>
				<Link
				  to='/services'
				  className='nav-links'
				  onClick={closeMobileMenu}
				>
				  Galería
				</Link>
			  </li>
			  <li className='nav-item'>
				<Link
				  to='/articulos'
				  className='nav-links'
				  onClick={closeMobileMenu}
				>
				  Artículos
				</Link>
			  </li>
			  <li className='nav-item'>
				<Link
				  to='/entrenamientos'
				  className='nav-links'
				  onClick={closeMobileMenu}
				>
				  Entrenamientos
				</Link>
			  </li>
			  <li className='nav-item'>
				<Link
				  to='/services'
				  className='nav-links'
				  onClick={closeMobileMenu}
				>
				  DesdelaBase
				</Link>
			  </li>
			  <li className='nav-item'>
				<Link
				  to='/products'
				  className='nav-links'
				  onClick={closeMobileMenu}
				>
				  Productos
				</Link>
			  </li>
			  {/* <li className='nav-item'>
				<Link
				  to='/services'
				  className='nav-links'
				  onClick={closeMobileMenu}
				>
				  EnVivo
				</Link>
			  </li> */}
			  {/* <li className='nav-item'>
				<Link
				  to='/services'
				  className='nav-links'
				  onClick={closeMobileMenu}
				>
				  360°Candelas
				</Link>
			  </li> */}
  
			  <li>
				<Link
				  to='/sign-up'
				  className='nav-links-mobile'
				  onClick={closeMobileMenu}
				>
				  Sign Up
				</Link>
			  </li>
			</ul>
			{button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
		  </div>
		</nav>
	  </>
	);
  }
  
  export default Navbar;

