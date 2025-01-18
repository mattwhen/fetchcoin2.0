import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import "./Nav.css";

const Nav = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [showNav, setShowNav] = useState(true);

	// Prevent/hide scrolling when the Navigation menu is opened.
	const mobileOpenHandler = () => {
		console.log(mobileOpen);

		if (mobileOpen) {
			document.getElementsByTagName("body")[0].style.overflow = "visible";
			setMobileOpen(false);
		} else {
			document.getElementsByTagName("body")[0].style.overflow = "hidden";
			setMobileOpen(true);
		}
	};

	const navLinks = [
		{
			id: 0,
			title: "ABOUT",
			link: "#about",
		},
		{
			id: 1,
			title: "CRYPTO",
			link: "#crypto",
		},
		{
			id: 2,
			title: "MISSION",
			link: "#mission",
		},
		{
			id: 3,
			title: "CONTACT",
			link: "#contact",
		},
	];

	return (
		<>
			<nav className="sticky bg-white top-0 z-50 h-16 max-w-[1920px] shadow-sm">
				{/* DESKTOP NAVIGATION LINKS */}
				<div
					className="hidden w-full px-4 text-black lg:flex lg:items-center lg:justify-center"
					id="desktopUl"
				>
					<div className="logo lg:flex lg:justify-center">
						<a href="/" className="">
							<Image
								src={`/assets/Logo_whiteBg.png`}
								priority={true}
								className="cursor-pointer"
								alt="Company Logo"
								width={150}
								height={150}
							/>
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
				</div>
				{/* Mobile view */}
				<div className="flex items-center px-4 lg:hidden">
					<Image
						src={`/assets/Logo_whiteBg.png`}
						className="cursor-pointer"
						alt="Company Logo"
						width={150}
						height={150}
						onClick={() => (window.location.href = "/")}
					/>
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
								{" "}
								<a href={link} onClick={mobileOpenHandler}>
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
