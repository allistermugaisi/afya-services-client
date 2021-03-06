import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import ImageSlider from '../ImageSlider/ImageSlider';
import { SliderData } from '../ImageSlider/SliderData';
import {
	TextField,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	DialogActions,
	Button,
} from '@mui/material';
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
	const descriptionElementRef = useRef(null);

	const [toggled, setToggled] = useState(false);
	const [scrollHeader, setScrollHeader] = useState(false);
	const [buttonLoading, setButtonLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [scroll] = useState('paper');

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

	// const handleClickOpen = (scrollType) => () => {
	// 	setOpen(true);
	// 	setScroll(scrollType);
	// };

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		if (open) {
			const { current: descriptionElement } = descriptionElementRef;
			if (descriptionElement !== null) {
				descriptionElement.focus();
			}
		}
	}, [open]);

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
									className={scrollHeader ? 'nav-scroll-link' : 'nav-link'}
									to="home"
									activeClass="active-link"
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
									activeClass="active-link"
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
									activeClass="active-link"
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
									activeClass="active-link"
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
									activeClass="active-link"
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
									activeClass="active-link"
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
				<div className="inner-header bd-container">
					<h3>Your health care</h3>
					<h3>
						<Typewriter
							options={{
								strings: ['journey starts here.'],
								autoStart: true,
								loop: true,
							}}
						/>
					</h3>
					<p>Care In An Environment of excellence</p>
					<ul>
						<li>
							<Scroll.Link
								to="objective"
								className="button"
								style={{ cursor: 'pointer' }}
							>
								Get started
							</Scroll.Link>
							{/* <Button
								sx={{
									minWidth: '150px',
									backgroundColor: '#00db1a',
									color: '#fff',
								}}
								onClick={handleClickOpen('paper')}
							>
								Read More
							</Button> */}
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
								response, please call the office and if we are not open, go to
								the ER immediately.
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
							Afya is derived from a Swahili word that means ???health??? Afya
							Services LLC was founded by CEO Phina Mayu, a Nurse Practitioner
							specializing in Adult-Geriatric population. Afya now offers
							Pediatric Psychiatry, EMDR and Psychedelic-Assisted Psychotherapy
							(KAPS)
						</p>
					</div>

					<div className="objective-content">
						<i className="fas fa-bullseye fa-3x"></i>
						<h3 className="objective-title">Vision</h3>
						<p className="objective-description">
							Our vision is to provide our clients with high quality
							evidence-based care. We are destined to provide preventative
							services and medication management to children and adults of all
							ages.
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
							Afya Services LLC is a private practice that offers both primary
							care and medication management to children and adults of all ages.
							We also specialize in EMDR and Psychedelic-Assisted Psychotherapy
							(KAPS) Are symptoms of anxiety, depression and ADHD impacting your
							daily life? Don't feel stuck and hopeless, we can help reduce the
							barriers that you are facing.
						</p>
					</div>
					<div className="card flex">
						{/* <img src={Pharmacy} alt="pharmacy" /> */}
						<SuspenseImg alt="pharmacy" src={Pharmacy} />
						<p>
							Phina Mayu APRN has over 15 years of mental health expertise and
							tailor???s individual treatment plan in Anxiety, Depression, ADHD
							and MAT/Suboxone. I offer in office as well as Telehealth
							services.
						</p>
					</div>
					<div className="card flex">
						{/* <img src={Pharmacy} alt="pharmacy" /> */}
						<SuspenseImg alt="pharmacy" src={Pharmacy} />
						<p>
							Shannan Victorino board certified PMHNP-C. She focuses on
							empowering patients to manage their full spectrum of emotions by
							facilitating inner healing via evidence-based empowering
							resources. <br />
							Shannan is compassionate and will walk with you to achieve your
							own personal evolution. Shannan offers above services as well as
							Pediatric Psychiatry, EMDR and Psychedelic-Assisted Psychotherapy
							(KAPS). We offer office visits as well as Telehealth services.
						</p>
					</div>
					<div className="card flex">
						{/* <img src={Diagnostic} alt="diagnostic-icon" /> */}
						<SuspenseImg alt="diagnostic-icon" src={Diagnostic} />
						<p>Evening & Weekend Hours also available by appointment only.</p>
					</div>
					<div className="card flex">
						{/* <img src={Cardio} alt="cardio" /> */}
						<SuspenseImg alt="cardio" src={Cardio} />
						<p>
							The 1st appointment usually lasts about 1 hour, whereby you get
							diagnosed and educated then proceed with an individualized
							treatment plan.
						</p>
					</div>
					<div className="card flex">
						{/* <img src={Ambulance} alt="ambulance" /> */}
						<SuspenseImg alt="ambulance" src={Ambulance} />
						<p>
							Know where your resources are to respond quickly and effectively.
						</p>
					</div>
					<div className="card flex">
						{/* <img src={XRay} alt="x-ray" /> */}
						<SuspenseImg alt="x-ray" src={XRay} />
						<p>Follow-up appointments usually lasts about 1/2 half hour.</p>
					</div>
				</div>
			</section>

			{/* <!--========== SERVICES ==========--> */}
			<section className="menu section bd-container" id="services">
				<span className="section-subtitle">services</span>
				<h2 className="section-title">Our Healthcare Services</h2>

				<h3 className="section-subtitle">
					Explore Shannan Victorino Caring & Premium Healthcare Services
				</h3>

				<div className="menu__container bd-grid">
					<div>
						<div className="services-icon">
							<i className="bx bx-plus-medical bx-md bx-spin-hover"></i>
						</div>
						<span className="services-subtitle">Specializes in EMDR</span>
						{/* <p className="services-description">
							EMDR (Eye Movement Desensitization and Reprocessing) uses various
							bilateral stimulation techniques to help facilitate the processing
							of traumatic emotions that were too overwhelming at the time of
							the event for the brain to integrate appropriately.
						</p> */}
					</div>
					<div>
						<div className="services-icon">
							<i className="bx bx-health bx-md bx-spin-hover"></i>
						</div>
						<span className="services-subtitle">
							Psychedelic-Assisted Psychotherapy
						</span>
						{/* <p className="services-description">
							Evidence supports ketamine-assisted psychotherapy (KAP) as an
							effective method for addressing many mental and emotional
							disturbances. Treatment is highly individualized to meet the
							participant's goals.
						</p> */}
					</div>
					<div>
						<div className="services-icon">
							<i className="bx bx-dna bx-md bx-spin-hover"></i>
						</div>
						<span className="services-subtitle">Pediatric Psychiatry</span>
						{/* <p className="services-description">
							Children who need assistance in managing their emotions, and to
							parents who need guidance in understanding their child's
							situation. We create a more coherent living environment, suitable
							to support the emotional development of the child.
						</p> */}
					</div>

					{/* <div>
						<div className="services-icon">
							<i className="bx bxs-capsule bx-md bx-spin-hover"></i>
						</div>
						<span className="services-subtitle">Pediatric Psychiatry</span>
						<p className="services-description">
							PEP/PrEP, is an HIV prevention method in which people who don???t
							have HIV take HIV medicine to reduce their risk of getting HIV if
							they are exposed to the virus.
						</p>
					</div>
					<div>
						<div className="services-icon">
							<i className="bx bx-pulse bx-md bx-spin-hover"></i>
						</div>
						<span className="services-subtitle">Substance Use</span>
						<p className="services-description">
							Enabling patients to cease substance abuse in order to avoid the
							psychological, legal, financial, social and physical consequences
							for purposes of reintegration back into workplace and the society.
						</p>
					</div>
					<div>
						<div className="services-icon">
							<i className="bx bx-donate-blood bx-md bx-spin-hover"></i>
						</div>
						<h3 className="services-subtitle">Sleep or Insomnia</h3>
						<p className="services-description">
							Treatment depends on what's causing your insomnia. Sometimes, an
							underlying cause, such as a medical condition or sleep disorder,
							can be found and treated.
						</p>
					</div> */}
				</div>
				{/* <div
					style={{
						display: 'flex',
						justifyContent: 'center',
						width: '100%',
						marginTop: '2rem',
					}}
				>
					<Button
						sx={{
							minWidth: '150px',
							backgroundColor: '#00db1a',
							color: '#fff',
						}}
						onClick={handleClickOpen('paper')}
					>
						Read More
					</Button>
				</div> */}
			</section>

			<section className="menu section bd-container" id="services">
				<span className="section-subtitle">more services offered</span>
				<h2 className="section-title">Other Healthcare Services</h2>

				<h3 className="section-subtitle">
					Other Caring & Premium Healthcare Services
				</h3>

				<div className="menu__container bd-grid">
					<div>
						<div className="services-icon">
							<i className="bx bx-plus-medical bx-md bx-spin-hover"></i>
						</div>
						<span className="services-subtitle">Medication Management</span>
						<p className="services-description">
							Assess your medication system and identify risk points. Reduce
							medication errors. Improve patient outcomes and your health.
						</p>
					</div>
					<div>
						<div className="services-icon">
							<i className="bx bx-pulse bx-md bx-spin-hover"></i>
						</div>
						<span className="services-subtitle">Substance Use</span>
						<p className="services-description">
							Enabling patients to cease substance abuse in order to avoid the
							psychological, legal, financial, social and physical consequences
							for purposes of reintegration back into workplace and the society.
						</p>
					</div>
					<div>
						<div className="services-icon">
							<i className="bx bx-donate-blood bx-md bx-spin-hover"></i>
						</div>
						<span className="services-subtitle">Sleep or Insomnia</span>
						<p className="services-description">
							Treatment depends on what's causing your insomnia. Sometimes, an
							underlying cause, such as a medical condition or sleep disorder,
							can be found and treated.
						</p>
					</div>

					{/* <div>
						<div className="services-icon">
							<i className="bx bxs-capsule bx-md bx-spin-hover"></i>
						</div>
						<span className="services-subtitle">Pediatric Psychiatry</span>
						<p className="services-description">
							PEP/PrEP, is an HIV prevention method in which people who don???t
							have HIV take HIV medicine to reduce their risk of getting HIV if
							they are exposed to the virus.
						</p>
					</div>
					<div>
						<div className="services-icon">
							<i className="bx bx-pulse bx-md bx-spin-hover"></i>
						</div>
						<span className="services-subtitle">Substance Use</span>
						<p className="services-description">
							Enabling patients to cease substance abuse in order to avoid the
							psychological, legal, financial, social and physical consequences
							for purposes of reintegration back into workplace and the society.
						</p>
					</div>
					<div>
						<div className="services-icon">
							<i className="bx bx-donate-blood bx-md bx-spin-hover"></i>
						</div>
						<h3 className="services-subtitle">Sleep or Insomnia</h3>
						<p className="services-description">
							Treatment depends on what's causing your insomnia. Sometimes, an
							underlying cause, such as a medical condition or sleep disorder,
							can be found and treated.
						</p>
					</div> */}
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
							No show-Policy will be charged <strong> $40 dollars</strong>.
							<br />
							Cancellation Policy: We request 24 hours in advance for
							appointment cancellation.
							<br />
							We do not provide long term pain management.
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
									rowsmax={4}
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
						<span className="footer__description">
							afyaservicesllc@gmail.com
						</span>
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
							<li>176 Toll Gate Road</li>
							<li>Suite 302</li>
							<li>Warwick, RI 02886</li>
						</ul>
					</div>
				</div>

				<p className="footer__copy">
					&#169; Copyright {new Date().getFullYear()}. All rights reserved.
				</p>
			</footer>
			<Dialog
				open={open}
				onClose={handleClose}
				scroll={scroll}
				aria-labelledby="scroll-dialog-title"
				aria-describedby="scroll-dialog-description"
			>
				<DialogTitle id="scroll-dialog-title">
					Shannan Victorino, MSN, APRN, PMHNP-BC
				</DialogTitle>
				<DialogContent dividers={scroll === 'paper'}>
					<DialogContentText
						id="scroll-dialog-description"
						ref={descriptionElementRef}
						tabIndex={-1}
					>
						Everyone wants to be understood and reach their full potential. As a
						board-certified psychiatric practitioner, I intend on empowering
						patients to manage the full spectrum of emotions that life has to
						offer. Learning about how the nervous system creates dissonance
						should help dissolve judgment and self-criticism. I want to
						facilitate your own inner healing intelligence by providing
						empowering resources. In the process, you will evolve with greater
						fortitude and sense of purpose. I use common-sense, compassionate,
						evidence-based methods to help you achieve transformation toward
						your own personal evolution.
						<h4>EMDR</h4>
						EMDR (Eye Movement Desensitization and Reprocessing) uses various
						bilateral stimulation techniques to help facilitate processing of
						traumatic emotions that were too overwhelming at the time of the
						event for the brain to integrate appropriately. Emotional reactions
						and physical symptoms are activated memory networks. If an event is
						not appropriately processed by our consciousness it can be held in
						our bodies and/or mind and become triggered by a similar event in
						the future. Sometimes the participant is unaware of the original
						event being triggered but using specific techniques unique to EMDR
						we are able to access these ???touch stone??? memories thereby
						processing and releasing any held memories so that they no longer
						hold a charge in our nervous system. Bilateral stimulation
						techniques facilitate communication between the left and right
						hemispheres of the brain activating the information processing
						system while in a safe and comfortable environment. This results in
						the relief of PTSD symptoms, anxiety and associated mental
						disorders, and often diminishes the need for psychotropic remedies.
						<h4>Psychedelic-Assisted Psychotherapy</h4>
						Evidence supports ketamine-assisted psychotherapy (KAP) as an
						effective method for addressing many mental and emotional
						disturbances. It also facilitates an expansion of consciousness
						allowing valuable insights regarding the nature of reality. KAP has
						been successful in treating addictions including nicotine and
						alcohol. KAP is also used to address anxiety, PTSD, uncover
						repressed traumas and depression. The word ???psychedelic??? literally
						means ???mind-manifesting'. Treatment is highly individualized to meet
						the participant's goals. The best way to describe how this modality
						results in healing is by imagining that it allows you to be awake in
						your dreams. It is well known that the dream state is often
						comprised of unresolved, subconscious material that had not been
						processed during the day or throughout your past. This is another
						example of the natural healing mechanism of the psyche, (we are
						amazing machinery)! Our natural healing intelligence is sneaky
						enough to process this stuff without our (conscious) consent or even
						recollection, while we are in deep sleep. By allowing the
						participant to be awake in their dream, they have the opportunity to
						confront traumas in a way that no other psychotherapy could
						facilitate in an ordinary state of consciousness. The non-ordinary
						state of consciousness (NOSC) that ketamine produces allows you to
						confront repressed or preverbal memories without the usual emotional
						charge attached to these events. After the psychedelic session is
						complete, there are several therapy sessions to integrate the
						experience so that long-lasting change is created. The previously
						disturbing event no longer holds an emotional charge after these new
						insights are integrated. The participant then feels relief, often
						described as feeling ???lighter???, as if there was a burden released.
						This is a successful and miraculous, transformative experience which
						allows the participant to move on with their lives without the need
						for daily medication to suppress emotions that want to be addressed
						and released, as nature intended.
						<h4>Pediatric Psychiatry</h4>
						We offer several options to children who need assistance in managing
						their emotions, and to parents who need guidance in understanding
						their child's situation. We create a more coherent living
						environment, suitable to support the emotional development of the
						child.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default Landing;
