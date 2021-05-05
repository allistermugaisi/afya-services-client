import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
	const [toggled, setToggled] = useState(false);
	const [scrollHeader, setScrollHeader] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () =>
				setScrollHeader(window.pageYOffset > 100)
			);
		}
	}, []);

	return (
		<>
			{/* <!--========== SCROLL TOP ==========--> */}
			<Link to="#" className="scrolltop" id="scroll-top">
				<i className="bx bx-chevron-up scrolltop-icon"></i>
			</Link>

			{/* <!--=========== NAVBAR ===========-->  */}
			<div className={scrollHeader ? 'header scroll-header' : 'header'}>
				<nav className="nav nav-container">
					<Link
						to="/"
						className={scrollHeader ? 'nav-scroll-logo' : 'nav-logo'}
					>
						Afya Services
					</Link>

					<div
						className={toggled ? 'nav-menu show-menu' : 'nav-menu'}
						id="nav-menu"
					>
						<ul className="nav-list">
							<li className="nav-item">
								<Link
									to="/home"
									className={
										scrollHeader
											? 'nav-scroll-link active-link'
											: 'nav-link active-link'
									}
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/services"
									className={scrollHeader ? 'nav-scroll-link' : 'nav-link'}
								>
									Services
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/blog"
									className={scrollHeader ? 'nav-scroll-link' : 'nav-link'}
								>
									Blog
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/about"
									className={scrollHeader ? 'nav-scroll-link' : 'nav-link'}
								>
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/contact"
									className={scrollHeader ? 'nav-scroll-link' : 'nav-link'}
								>
									Contact us
								</Link>
							</li>

							<li className="sign-button">
								<Link to="/signin" className="button">
									Sign in
								</Link>
							</li>

							<li>
								<i
									className={
										scrollHeader
											? 'bx bx-moon bx-sm bx-flashing change-theme-scroll'
											: 'bx bx-moon bx-sm bx-flashing change-theme'
									}
									id="theme-button"
								></i>
							</li>
						</ul>
					</div>
					<div
						className={scrollHeader ? 'nav-scroll-toggle' : 'nav-toggle'}
						id="nav-toggle"
						onClick={() => setToggled(!toggled)}
					>
						<i className="bx bx-menu bx-md"></i>
					</div>
				</nav>
			</div>
			<section className="header-section section">
				<h3>landing</h3>
			</section>

			<div className="halfway-section">
				<div className="halfway-content">
					<h3>Halfway section</h3>
				</div>
			</div>

			{/* <!--========== OBJECTIVE ==========--> */}
			<section className="objective section bd-container" id="objective">
				<span className="section-subtitle">explore</span>
				<h2 className="section-title">Our objective</h2>

				<div className="objective-container bd-grid">
					<div className="objective-content">
						<i className="fas fa-spa fa-3x"></i>
						<h3 className="objective-title">Who we are?</h3>
						<p className="objective-description">
							Afya is derived from a Swahili word that means “health” Afya
							Services LLC was founded by CEO Phina Mayu, a Nurse Practitioner
							specializing in Adult-Geriatric population.
						</p>
					</div>

					<div className="objective-content">
						<i className="fas fa-bullseye fa-3x"></i>
						<h3 className="objective-title">Vision</h3>
						<p className="objective-description">
							Our vision is to provide our clients with an “I am assured”
							experience when offering healthcare services. We are destined to
							provide preventative services and check-up services, to
							immunizations to all adults ages 18 years and above.
						</p>
					</div>

					<div className="objective-content">
						<i className="fas fa-gift fa-3x"></i>
						<h3 className="objective-title">Our Mission</h3>
						<p className="objective-description">
							Afya Services LLC is dedicated to providing compassionate,
							non-judgmental and collaborative quality care to meet the needs of
							each individual.
						</p>
					</div>
				</div>
			</section>

			{/* <!--========== SERVICES ==========--> */}
			<section className="menu section bd-container" id="menu">
				<span className="section-subtitle">services</span>
				<h2 className="section-title">Our Medical Services</h2>

				<h3 className="section-subtitle">
					Explore our Caring & Premium Medical Services
				</h3>

				<div className="menu__container bd-grid">
					<div>
						<div className="services-icon">
							<i className="bx bx-plus-medical bx-md bx-spin-hover"></i>
						</div>
						<span className="services-subtitle">Medication</span>
						<p className="services-description">
							Create detail schedule and resources plan to meet client’s project
							objective.
						</p>
					</div>
					<div>
						<div className="services-icon">
							<i className="bx bx-health bx-md bx-spin-hover"></i>
						</div>
						<span className="services-subtitle">Men's health</span>
						<p className="services-description">
							Create detail schedule and resources plan to meet client’s project
							objective.
						</p>
					</div>
					<div>
						<div className="services-icon">
							<i className="bx bx-dna bx-md bx-spin-hover"></i>
						</div>
						<span className="services-subtitle">STI Treatment</span>
						<p className="services-description">
							Create detail schedule and resources plan to meet client’s project
							objective.
						</p>
					</div>
					<div>
						<div className="services-icon">
							<i className="bx bxs-capsule bx-md bx-spin-hover"></i>
						</div>
						<span className="services-subtitle">PEP/PrEP Services</span>
						<p className="services-description">
							Create detail schedule and resources plan to meet client’s project
							objective.
						</p>
					</div>
					<div>
						<div className="services-icon">
							<i className="bx bx-pulse bx-md bx-spin-hover"></i>
						</div>
						<span className="services-subtitle">Preventative Services</span>
						<p className="services-description">
							Create detail schedule and resources plan to meet client’s project
							objective.
						</p>
					</div>
					<div>
						<div className="services-icon">
							<i className="bx bx-donate-blood bx-md bx-spin-hover"></i>
						</div>
						<h3 className="services-subtitle">Medication</h3>
						<p className="services-description">
							Create detail schedule and resources plan to meet client’s project
							objective.
						</p>
					</div>
				</div>
			</section>

			{/* <!--========== POLICY ==========--> */}
			<section className="policy section bd-container" id="policy">
				<div className="policy-container bd-grid">
					<div className="policy-data">
						<span className="section-subtitle policy-initial">our policy</span>
						<h2 className="section-title policy-initial">
							We take pride <br />
							in our delivery
						</h2>
						<p className="policy-description">
							Lateness Policy: <strong>15 minutes</strong> accepted after your
							already scheduled appointment.
							<br />
							No show-Policy: <strong>First 2</strong> no shows are Free.{' '}
							<strong>3rd No Show will be charged $ 30 dollars</strong>.
							<br />
							Cancellation Policy: We request 24 hours in advance for
							appointment cancellation.
							<br />
							We do not provide long term plan management.
						</p>
						<Link to="/policy" className="button">
							Explore Policy
						</Link>
					</div>

					<img src="" alt="" className="policy-img" />
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
						<h3 className="footer__title">Company</h3>
						<ul>
							<li>
								<Link to="#services" className="footer__link">
									About us
								</Link>
							</li>
							<li>
								<Link to="#" className="footer__link">
									Blog
								</Link>
							</li>
							<li>
								<Link to="#about" className="footer__link">
									Services
								</Link>
							</li>
							<li>
								<Link to="#" className="footer__link">
									Our Team
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
