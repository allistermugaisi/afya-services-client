import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import ImageSlider from '../ImageSlider/ImageSlider';
import { SliderData } from '../ImageSlider/SliderData';
import { TextField } from '@material-ui/core';
import * as Scroll from 'react-scroll';
import { useForm } from 'react-hook-form';
import { SuspenseImg } from '../SuspenseImage';

import AdornedButton from '../../utils/AdornedButton';
import Medical from '../../images/clear-medical.png';
import Diagnostic from '../../images/diagnostic-icon.png';
import Pharmacy from '../../images/best-pharmacy.png';
import Cardio from '../../images/cardio-monitoring.png';
import Ambulance from '../../images/ambulance-service-icon.png';
import XRay from '../../images/x-ray-icon.png';
import './Landing.css';

const Landing = () => {
	const [toggled, setToggled] = useState(false);
	const [scrollHeader, setScrollHeader] = useState(false);
	const [buttonLoading, setButtonLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'all',
		shouldUnregister: true,
		shouldFocusError: true,
	});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () =>
				setScrollHeader(window.pageYOffset > 100)
			);
		}
	}, []);

	const onSubmit = (data, e) => {
		e.preventDefault();
		setButtonLoading(true);
		console.log(data);
	};

	const closeMobileMenu = () => setToggled(false);

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
								<Scroll.Link
									className={
										scrollHeader
											? 'nav-scroll-link active-link'
											: 'nav-link active-link'
									}
									to="home"
									smooth={true}
									spy={true}
									duration={300}
									style={{ cursor: 'pointer' }}
									onClick={closeMobileMenu}
								>
									home
								</Scroll.Link>
							</li>
							<li className="nav-item">
								<Scroll.Link
									className={scrollHeader ? 'nav-scroll-link' : 'nav-link'}
									to="objective"
									smooth={true}
									spy={true}
									duration={300}
									style={{ cursor: 'pointer' }}
									onClick={closeMobileMenu}
								>
									explore
								</Scroll.Link>
							</li>
							<li className="nav-item">
								<Scroll.Link
									className={scrollHeader ? 'nav-scroll-link' : 'nav-link'}
									to="why_us"
									smooth={true}
									spy={true}
									duration={300}
									style={{ cursor: 'pointer' }}
									onClick={closeMobileMenu}
								>
									why us?
								</Scroll.Link>
							</li>
							<li className="nav-item">
								<Scroll.Link
									className={scrollHeader ? 'nav-scroll-link' : 'nav-link'}
									to="services"
									smooth={true}
									spy={true}
									duration={300}
									style={{ cursor: 'pointer' }}
									onClick={closeMobileMenu}
								>
									services
								</Scroll.Link>
							</li>
							<li className="nav-item">
								<Scroll.Link
									className={scrollHeader ? 'nav-scroll-link' : 'nav-link'}
									to="policy"
									smooth={true}
									spy={true}
									duration={300}
									style={{ cursor: 'pointer' }}
									onClick={closeMobileMenu}
								>
									policy
								</Scroll.Link>
							</li>
							<li className="nav-item">
								<Scroll.Link
									className={scrollHeader ? 'nav-scroll-link' : 'nav-link'}
									to="contact"
									smooth={true}
									spy={true}
									duration={300}
									style={{ cursor: 'pointer' }}
									onClick={closeMobileMenu}
								>
									contact us
								</Scroll.Link>
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
			<section className="header-section section" id="home">
				<div className="inner-header">
					<h3>Your health care</h3>
					<h3>
						{' '}
						journey &nbsp;
						<Typewriter
							options={{
								strings: ['starts', 'here.'],
								autoStart: true,
								loop: true,
							}}
						/>
					</h3>
					<p>Care In An Environment of excellence</p>
					<ul>
						<li className="sign-button">
							<Link to="/" className="button">
								Get started
							</Link>
						</li>
					</ul>
				</div>
			</section>

			<div className="halfway-section">
				<div className="halfway-content">
					<div className="halfway-info">
						<div className="halfway-card">
							<h3>Emergency Cases</h3>
							<p>
								If you're experiencing an emergency, or looking for emergency
								response, please contact us via the chat or phone numbers below.
							</p>
						</div>
						<div className="halfway-card">
							<h3>Accepting new Patients</h3>
							<p>
								In light of public health concerns, protecting the health of our
								patients while also providing healthcare services is our top
								priority.
							</p>
						</div>
						<div className="halfway-card">
							<h3>Opening Hours</h3>
							<p>Mon - Fri 9am to 5pm</p>
							<p>Sat 9am to 12pm</p>
							<p>Extended hours by appointment ONLY.</p>
						</div>
					</div>
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

			{/* <!-- =====Why Us===== --> */}
			<section className="features-main my-2" id="why_us">
				<h1>Why us?</h1>
				<div className="features-container grid grid-3">
					<div className="card flex">
						{/* <img src={Medical} alt="clear-medical-records" /> */}
						<SuspenseImg alt="clear-medical-records" src={Medical} />
						<p>
							Producing content that serves to inform, entertain and educate the
							masses. Content that serves to show the best aspects of humanity.
						</p>
					</div>
					<div className="card flex">
						{/* <img src={Pharmacy} alt="pharmacy" /> */}
						<SuspenseImg alt="pharmacy" src={Pharmacy} />
						<p>
							Directing content that is encouraging to our audiences and derives
							the best form of pleasure and satisfaction.
						</p>
					</div>
					<div className="card flex">
						{/* <img src={Diagnostic} alt="diagnostic-icon" /> */}
						<SuspenseImg alt="diagnostic-icon" src={Diagnostic} />
						<p>
							Mentoring young talent into becoming the best version of
							themselves when it comes to acting.
						</p>
					</div>
					<div className="card flex">
						{/* <img src={Cardio} alt="cardio" /> */}
						<SuspenseImg alt="cardio" src={Cardio} />
						<p>
							To create campaigns that bring awareness to the masses through a
							wide range of broadcast option.
						</p>
					</div>
					<div className="card flex">
						{/* <img src={Ambulance} alt="ambulance" /> */}
						<SuspenseImg alt="ambulance" src={Ambulance} />
						<p>Mission statement. True, real and inspiring.</p>
					</div>
					<div className="card flex">
						{/* <img src={XRay} alt="x-ray" /> */}
						<SuspenseImg alt="x-ray" src={XRay} />
						<p>
							Target audience. Young youths between the ages of 20-25 years.
						</p>
					</div>
				</div>
			</section>

			{/* <!--========== SERVICES ==========--> */}
			<section className="menu section bd-container" id="services">
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

			<ImageSlider slides={SliderData} />

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
						{/* <Link to="/policy" className="button">
							Explore Policy
						</Link> */}
					</div>

					{/* <img
						src="https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt="policy"
						className="policy-img"
					/> */}
					<SuspenseImg
						alt="policy"
						className="policy-img"
						src="https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					/>
				</div>
			</section>

			{/* <!--========== CONTACT US ==========--> */}
			<section className="contact section bd-container" id="contact">
				<div className="contact__container bd-grid">
					<div className="contact__data">
						<span className="section-subtitle contact__initial">
							Let's talk
						</span>
						<h2 className="section-title contact__initial">Contact us</h2>
						<p className="contact__description">
							Want to get in touch? We'd love to hear from you. Here is how you
							can reach us...
						</p>
						<div className="call-button">
							<AdornedButton
								disableElevation
								size="large"
								type="submit"
								color="primary"
								style={{ marginTop: '1rem' }}
								disabled={buttonLoading ? true : false}
								loading={buttonLoading}
								variant="contained"
							>
								Call us on +1-401-384-7971
							</AdornedButton>
						</div>
					</div>

					<div className="contact__button">
						<form onSubmit={handleSubmit(onSubmit)} className="login-form">
							<div className="textField-container">
								<TextField
									{...register('name', {
										required: 'Name is required!',
										shouldFocus: true,
									})}
									name="name"
									type="text"
									variant="outlined"
									label="Name"
									margin="normal"
									autoComplete="off"
									fullWidth
									error={errors?.name ? true : false}
									helperText={errors?.name?.message}
								/>

								<TextField
									{...register('email', {
										required: 'Email is required!',
										shouldFocus: true,
									})}
									name="email"
									type="text"
									variant="outlined"
									label="Email"
									margin="normal"
									autoComplete="off"
									fullWidth
									error={errors?.email ? true : false}
									helperText={errors?.email?.message}
								/>

								<TextField
									{...register('message', {
										required: 'Message is required!',
										shouldFocus: true,
									})}
									name="message"
									type="text"
									variant="outlined"
									label="Message"
									margin="normal"
									multiline
									rows={4}
									rowsMax={4}
									autoComplete="off"
									fullWidth
									error={errors?.message ? true : false}
									helperText={errors?.message?.message}
								/>

								<AdornedButton
									// fullWidth
									disableElevation
									size="large"
									type="submit"
									color="primary"
									style={{ marginTop: '1rem' }}
									disabled={buttonLoading ? true : false}
									loading={buttonLoading}
									variant="contained"
								>
									submit
								</AdornedButton>
							</div>
							<div>
								<p className="register-link">
									We will get back to you at the earliest!
								</p>
							</div>
						</form>
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
						<span className="footer__description">www.afyaservices.us</span>
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
								<Scroll.Link
									className="footer__link"
									to="home"
									smooth={true}
									spy={true}
									duration={300}
									style={{ cursor: 'pointer' }}
								>
									Home
								</Scroll.Link>
							</li>
							<li>
								<Scroll.Link
									className="footer__link"
									to="objective"
									smooth={true}
									spy={true}
									duration={300}
									style={{ cursor: 'pointer' }}
								>
									Explore
								</Scroll.Link>
							</li>
							<li>
								<Scroll.Link
									className="footer__link"
									to="why_us"
									smooth={true}
									spy={true}
									duration={300}
									style={{ cursor: 'pointer' }}
								>
									Why us?
								</Scroll.Link>
							</li>
							<li>
								<Scroll.Link
									className="footer__link"
									to="services"
									smooth={true}
									spy={true}
									duration={300}
									style={{ cursor: 'pointer' }}
								>
									Services
								</Scroll.Link>
							</li>
						</ul>
					</div>

					<div className="footer__content">
						<h3 className="footer__title">Support</h3>
						<ul>
							<li>
								<Scroll.Link
									className="footer__link"
									to="contact"
									smooth={true}
									spy={true}
									duration={300}
									style={{ cursor: 'pointer' }}
								>
									Contact us
								</Scroll.Link>
							</li>
							<li>
								<Scroll.Link
									className="footer__link"
									to="policy"
									smooth={true}
									spy={true}
									duration={300}
									style={{ cursor: 'pointer' }}
								>
									Policy
								</Scroll.Link>
							</li>
							<li>
								<Link to="#" className="footer__link">
									Terms of services
								</Link>
							</li>
						</ul>
					</div>

					<div className="footer__content">
						<h3 className="footer__title">Locate us</h3>
						<ul>
							<li>
								<Link to="#" className="footer__link">
									Locate us
								</Link>
							</li>
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
