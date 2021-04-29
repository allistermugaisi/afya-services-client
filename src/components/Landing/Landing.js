import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
	const [toggled, setToggled] = useState(false);
	return (
		<>
			{/* <!--========== SCROLL TOP ==========--> */}
			<Link to="#" className="scrolltop" id="scroll-top">
				<i className="bx bx-chevron-up scrolltop__icon"></i>
			</Link>

			{/* Header  */}
			<div className="header">
				<nav className="nav nav-container">
					<Link to="/" className="nav-logo">
						Afya Services
					</Link>

					<div
						className={toggled ? 'nav-menu show-menu' : 'nav-menu'}
						id="nav-menu"
					>
						<ul className="nav-list">
							<li className="nav-item">
								<Link to="/home" className="nav-link active-link">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/about" className="nav-link">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/services" className="nav-link">
									Services
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/menu" className="nav-link">
									Pricing
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/contact" className="nav-link">
									Contact us
								</Link>
							</li>

							<li>
								<i className="bx bx-moon change-theme" id="theme-button"></i>
							</li>
						</ul>
					</div>
					<div
						className="nav-toggle"
						id="nav-toggle"
						onClick={() => setToggled(!toggled)}
					>
						<i className="bx bx-menu"></i>
					</div>
				</nav>
			</div>

			{/* <!--========== SERVICES ==========--> */}
			<section className="services section bd-container" id="services">
				<span className="section-subtitle">Offering</span>
				<h2 className="section-title">Our Services</h2>

				<div className="services-container bd-grid">
					<div className="services-content">
						<i className="fas fa-bullseye fa-3x"></i>
						<h3 className="services-title">Objective</h3>
						<p className="services-description">
							Our objective is to provide our clients with an “I am assured”
							experience when we are chosen to execute their projects.
						</p>
					</div>

					<div className="services-content">
						<i className="fas fa-spa fa-3x"></i>
						<h3 className="services__title">Our Vision</h3>
						<p className="services__description">
							To be a respectable building contractor delivering beyond
							expectation, always.
						</p>
					</div>

					<div className="services__content">
						<i className="fas fa-project-diagram fa-3x"></i>
						<h3 className="services__title">Our Mission</h3>
						<p className="services__description">
							Afya Services LLC is dedicated to providing compassionate,
							non-judgmental and collaborative quality care to meet the needs of
							each individual.
						</p>
					</div>
				</div>
			</section>

			{/* <!--========== FOOTER ==========--> */}
			<footer className="footer section bd-container">
				<div className="footer__container bd-grid">
					<div className="footer__content">
						<Link to="/" className="footer__logo">
							Afya Services LLC
						</Link>
						<span className="footer__description">info@afyaservices.us</span>
						<span className="footer__description">Liability Partnership.</span>
						<div>
							<Link to="#" className="footer__social">
								<i className="bx bxl-facebook"></i>
							</Link>
							<Link to="#" className="footer__social">
								<i className="bx bxl-instagram"></i>
							</Link>
							<Link to="#" className="footer__social">
								<i className="bx bxl-twitter"></i>
							</Link>
						</div>
					</div>

					<div className="footer__content">
						<h3 className="footer__title">Services</h3>
						<ul>
							<li>
								<Link to="#services" className="footer__link">
									What we offer
								</Link>
							</li>
							<li>
								<Link to="#" className="footer__link">
									What we do
								</Link>
							</li>
							<li>
								<Link to="#about" className="footer__link">
									About us
								</Link>
							</li>
							<li>
								<Link to="#" className="footer__link">
									Appointments
								</Link>
							</li>
						</ul>
					</div>

					<div className="footer__content">
						<h3 className="footer__title">Support</h3>
						<ul>
							<li>
								<Link to="#contact" className="footer__link">
									Contact us
								</Link>
							</li>
							<li>
								<Link to="#" className="footer__link">
									Our Team
								</Link>
							</li>
							<li>
								<Link to="#" className="footer__link">
									Privacy policy
								</Link>
							</li>
							<li>
								<Link to="#" className="footer__link">
									Terms of services
								</Link>
							</li>
						</ul>
					</div>

					<div className="footer__content">
						<h3 className="footer__title">Address</h3>
						<ul>
							<li>Liza Apartments</li>
							<li>Fax us at 401-340-1499</li>
							<li>P.O. Box 02908</li>
							<li>Rhode Island, United States</li>
						</ul>
					</div>
				</div>

				<p className="footer__copy">
					&#169; Copyright {new Date().getFullYear()}. All rights reserved.
				</p>
			</footer>
		</>
	);
};

export default Landing;
