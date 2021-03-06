import React from "react";
import PropType from "prop-types";
import './footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contactanos</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              {/* TRVL
              <i class='fab fa-typo3' /> */}
              <img src={logo} alt="" style={{width: "180px"}}/>
            </Link>
          </div>
          <small class='website-rights'>SoloFutsal ?? 2020</small>
          <div class='social-icons'>
            <a href="https://www.facebook.com/Casotela" class='social-icon-link facebook' target='_blank'>
              <i class='fab fa-facebook-f' />
            </a>
            <a href="https://www.instagram.com/casotela/" class='social-icon-link instagram' target='_blank'>
              <i class='fab fa-instagram' />
            </a>
            <a href="https://www.youtube.com/channel/UC3qDpN-KuEbkKgiSgfh-FeQ/featured" class='social-icon-link youtube' target='_blank'>
              <i class='fab fa-youtube' />
            </a>
            <a href="https://twitter.com/casotela" class='social-icon-link twitter' target='_blank'>
              <i class='fab fa-twitter' />
            </a>
            {/* <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
// export function Footer(props) {
// 	return (
// 		// <div className="footer-style">
// 		// 	<footer className="footer p-3 text-center">
// 		// 		<div className="container">
// 		// 			<span className="text-white">{props.copyright}</span>
// 		// 		</div>
// 		// 	</footer>
// 		// </div>
// 		<div className="footer-style">
// 			<div className="container">
// 				<div className="row">
// 					<div className="col-md-3 col-sm-6">
// 						<h4>NOSOTROS</h4>
// 						<ul className="list-unstyled">
// 							<li>
// 								NUESTRA PROPUESTA
// 							</li>
// 							<li>
// 								NUESTRA PROPUESTA
// 							</li>
// 						</ul>
// 					</div>
// 					<div className="col-md-3 col-sm-6">
// 						<h4>NOSOTROS</h4>
// 						<ul className="list-unstyled">
// 							<li>
// 								NUESTRA PROPUESTA
// 							</li>
// 							<li>
// 								NUESTRA PROPUESTA
// 							</li>
// 						</ul>
// 					</div>
// 					<div className="col-md-3 col-sm-6">
// 						<h4>NOSOTROS</h4>
// 						<ul className="list-unstyled">
// 							<li>
// 								NUESTRA PROPUESTA
// 							</li>
// 							<li>
// 								NUESTRA PROPUESTA
// 							</li>
// 						</ul>
// 					</div>
// 					<div className="col-md-3 col-sm-6">
// 						<h4>NOSOTROS</h4>
// 						<ul className="list-unstyled">
// 							<li>
// 								NUESTRA PROPUESTA
// 							</li>
// 							<li>
// 								NUESTRA PROPUESTA
// 							</li>
// 						</ul>
// 					</div>
// 				</div>
// 				<footer className="footer p-3 text-center">
// 					<div className="container">
// 						<span className="text-white">{props.copyright}</span>
// 					</div>
// 				</footer>
// 			</div>
// 		</div>
// 	);
// }

// Footer.propTypes = {
// 	copyright: PropType.string
// };
