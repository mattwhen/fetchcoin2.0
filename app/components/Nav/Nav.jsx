import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import LightLogo from "../../images/Logo_whiteBg.png";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import "../../App.css";
import "./Nav.css";

const Nav = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [showNav, setShowNav] = useState(true);

	// Prevent/hide scrolling when the Navigation menu is opened.
	const mobileOpenHandler = () => {
		if (mobileOpen) {
			document.getElementsByTagName("body")[0].style.overflow = "visible";
			setMobileOpen(false);
		} else {
			document.getElementsByTagName("body")[0].style.overflow = "hidden";
			setMobileOpen(true);
		}
	};

	const auth = getAuth();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				console.log("Sign-out successful", auth);
				window.location.href = "/login";
			})
			.catch((error) => {
				// An error happened.
				console.error("Error signing out", error);
			});
	};

	const navLinks = [
		{
			id: 0,
			title: "ABOUT",
			link: "/fetchcoin/#about",
		},
		{
			id: 1,
			title: "CRYPTO",
			link: "/fetchcoin/#crypto",
		},
		{
			id: 2,
			title: "MISSION",
			link: "/fetchcoin/#mission",
		},
		{
			id: 3,
			title: "CONTACT",
			link: "/fetchcoin/#contact",
		},
	];

	return (
		<>
			<nav className="bg-white sticky top-0 z-50 h-16 max-w-[1920px] shadow-sm">
				{/* DESKTOP NAVIGATION LINKS */}
				<div
					className="hidden w-full px-4 text-black lg:flex lg:items-center lg:justify-center"
					id="desktopUl"
				>
					<div className="logo lg:flex lg:justify-center">
						<a href="/fetchcoin" className="">
							<img
								src={LightLogo}
								className="cursor-pointer"
								alt="Company Logo"
								width={150}
								height={150}
							></img>
						</a>
					</div>
					<div className="nav-links lg:flex lg:justify-center">
						{navLinks.map(({ id, title, link }) => {
							return (
								<a
									key={id}
									href={link}
									className="mx-5 hvr-underline-from-left hvr-underline-from-left:before hvr-underline-from-left:focus:before hvr-underline-from-left:focus:active"
								>
									{title}
								</a>
							);
						})}
					</div>
					{/* Log in & Sign up buttons */}
					<div className="hidden lg:flex">
						{!auth.currentUser ? (
							<Link to="/login">
								<button className="log-in rounded-full mr-2 text-center w-24 bg-blue-background text-white py-2 px-4 hover:bg-blue-background-hover">
									Log in
								</button>
							</Link>
						) : null}
						{!auth.currentUser ? (
							<Link to="/signup">
								<button className="sign-up rounded-full text-center w-24 bg-gold-trim text-white py-2 px-4 hover:bg-gold-trim-hover">
									Sign up
								</button>
							</Link>
						) : null}
						{auth.currentUser ? (
							<button
								onClick={handleSignOut}
								className="rounded-full text-center w-24 bg-gold-trim text-white py-2 px-4 hover:bg-gold-trim-hover"
							>
								Sign Out
							</button>
						) : null}
						<div>
						{/* {auth.currentUser.email ? <span>{auth.currentUser.email}</span> : null} */}
						</div>
					</div>
				</div>
				{/* Mobile view */}
				<div className="flex items-center px-4 lg:hidden">
					<img
						src={LightLogo}
						className="cursor-pointer"
						alt="Company Logo"
						width={150}
						height={150}
						onClick={() =>
							(window.location.href = "https://mattwhen.github.io/fetchcoin/")
						}
					></img>
					<div
						id="hamburger-menu"
						className="text-4xl flex align-middle text-gray-500 ml-auto lg:hidden"
						onClick={mobileOpenHandler}
					>
						{mobileOpen ? (
							<RxCross1 className="z-50 transition-all text-gray-700" />
						) : (
							<GiHamburgerMenu className=" text-gray-700" />
						)}
					</div>
				</div>
				{/* HAMBURGER MENU OPTIONS */}
				<ul
					className={
						mobileOpen ? "show-mobile-nav bg-white " : "hide-mobile-nav"
					}
				>
					{navLinks.map(({ id, title, link }) => {
						return (
							<li key={id}>
								<a href={link} onClick={() => mobileOpenHandler(false)}>
									{title}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
};

export default Nav;
