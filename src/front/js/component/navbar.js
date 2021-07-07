import React from "react";
import logo from '../../../assets/logo.png';
import './navbar.css';
import NavbarDos from '../component/Navbar/Navbar';

// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Navbar() {
	return (
		<div className="navbar-style">
			<div className="row">
				<div className="col">
					Acá van los icons
				</div>
			</div>
			<div className="row">
				<div className="col">
					<a className="navbar-brand" href="#">
						<img src={logo} style={{ height: "65px" }}></img>
					</a>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<NavbarDos/>
				</div>
			</div>

		</div>
	);
}
