import React from 'react';
import LocationDot from '../../images/location-dot-solid.svg';
import Clock from '../../images/clock-regular.svg';
import Phone from '../../images/phone-solid.svg';

const Contact = () => {
	const fields = [
		{
			id: 1,
			text: '68243 Native St.',
			icon: LocationDot,
		},
		{
			id: 2,
			text: 'Tel. +1 123-456-8790',
			icon: Phone,
		},
		{
			id: 3,
			text: 'Mon - Fri 8:00AM - 5:00PM',
			icon: Clock,
		},
	];

	return (
		<>
			<h2 id='contact' className='text-center text-4xl pt-20 pb-10'>
				Contact Us
			</h2>
			<div className=' max-w-md m-auto px-4 pb-12'>
				<p className='mb-10 text-md'>
					Contact us during our normal working ours to learn more about our
					product. Fetchcoin values your feedback to provide you with the best
					possible experience.
				</p>
				{fields.map((item) => {
					return (
						<div key={item.id} className='flex space-x-4'>
							<img src={item.icon} className='w-4' alt='' />
							<p key={item.id} className='text-lg leading-10'>
								{item.text}
							</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Contact;
