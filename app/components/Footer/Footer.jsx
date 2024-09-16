import React from 'react';
import { FaGithub, FaLinkedin, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import FooterLinks from '../FooterLinks/FooterLinks';

const Footer = () => {
	
	return (
		<footer className='px-6 bg-footer-bg'>
			<div className='footerContainer flex flex-col lg:flex-row lg:justify-center lg:items-start py-14'>
				<FooterLinks />
			</div>
			<ul className='flex justify-center items-center space-x-5 mb-4'>
				<li className='text-center rounded-full'>
					<FaGithub className='text-3xl cursor-pointer m-auto' />
				</li>
				<FaLinkedin className='text-3xl cursor-pointer m-auto' />
				<FaTiktok className='text-3xl cursor-pointer m-auto' />
				<FaXTwitter className='text-3xl cursor-pointer m-auto' />
			</ul>
			<div className='flex justify-center pb-8'>
				<p className='text-sm md:text-md'>© 2023 Matthew A. Nguyen. All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
