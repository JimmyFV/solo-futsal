import React from "react";
import PropType from "prop-types";
import './footer.css';

export function Footer(props) {
	return (
		// <div className="footer-style">
		// 	<footer className="footer p-3 text-center">
		// 		<div className="container">
		// 			<span className="text-white">{props.copyright}</span>
		// 		</div>
		// 	</footer>
		// </div>
		<div className="footer-style">
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-sm-6">
						<h4>NOSOTROS</h4>
						<ul className="list-unstyled">
							<li>
								NUESTRA PROPUESTA
							</li>
							<li>
								NUESTRA PROPUESTA
							</li>
						</ul>
					</div>
					<div className="col-md-3 col-sm-6">
						<h4>NOSOTROS</h4>
						<ul className="list-unstyled">
							<li>
								NUESTRA PROPUESTA
							</li>
							<li>
								NUESTRA PROPUESTA
							</li>
						</ul>
					</div>
					<div className="col-md-3 col-sm-6">
						<h4>NOSOTROS</h4>
						<ul className="list-unstyled">
							<li>
								NUESTRA PROPUESTA
							</li>
							<li>
								NUESTRA PROPUESTA
							</li>
						</ul>
					</div>
					<div className="col-md-3 col-sm-6">
						<h4>NOSOTROS</h4>
						<ul className="list-unstyled">
							<li>
								NUESTRA PROPUESTA
							</li>
							<li>
								NUESTRA PROPUESTA
							</li>
						</ul>
					</div>
				</div>
				<footer className="footer p-3 text-center">
					<div className="container">
						<span className="text-white">{props.copyright}</span>
					</div>
				</footer>
			</div>
		</div>
	);
}

Footer.propTypes = {
	copyright: PropType.string
};
