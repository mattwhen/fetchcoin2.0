import React from 'react';
import { TfiWallet, TfiCreditCard } from 'react-icons/tfi';
import { AiOutlineStock } from 'react-icons/ai';

const Mission = () => {

	const cardHeaders = [
		{
			id: 0,
			title: 'Wallet',
		},
		{
			id: 1,
			title: 'Market Analysis Tools',
		},

	]

	return (
		<>
				<h2 id='mission' className='text-center text-4xl pt-20 pb-10'>Our Mission</h2>
			<div className='CONTAINER flex flex-col justify-center items-center gap-10 text-center lg:flex-row lg:gap-1'>
				<div className='p-5 border-solid border-4 rounded-xl border-sky-700 mx-5 md:w-3/4 lg:w-96'>
					<h3 className='text-2xl pb-5'>Secure Wallet</h3>
					<div className='flex flex-col justify-center items-center'>
						<TfiWallet className='text-5xl mb-5' />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							dolore minus beatae alias unde, iusto vero, dolores nemo ab iste
							vel, veniam quas laboriosam error quaerat rerum dolorem ipsum! At!
							Cumque doloremque eius error veniam ad beatae fuga magni explicabo
							dicta facilis facere sapiente quae reiciendis officia quos rerum,
							voluptates possimus aliquam fugit maxime, inventore at. Magnam
							culpa nemo quidem?
						</p>
					</div>
				</div>
				<div className='p-5 border-solid border-4 rounded-xl border-sky-700 mx-5 md:w-3/4 lg:w-96'>
					<div className='flex flex-col justify-center items-center'>
						<h3 className='text-2xl pb-5'>Price tracking</h3>
						<AiOutlineStock className='text-5xl mb-5' />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							dolore minus beatae alias unde, iusto vero, dolores nemo ab iste
							vel, veniam quas laboriosam error quaerat rerum dolorem ipsum! At!
							Cumque doloremque eius error veniam ad beatae fuga magni explicabo
							dicta facilis facere sapiente quae reiciendis officia quos rerum,
							voluptates possimus aliquam fugit maxime, inventore at. Magnam
							culpa nemo quidem?
						</p>
					</div>
				</div>
				<div className='p-5 border-solid border-4 rounded-xl border-sky-700 mx-5 md:w-3/4 lg:w-96'>
					<div className='flex flex-col justify-center items-center'>
						<h3 className='text-2xl pb-5'>Hassle-free transactions</h3>
						<TfiCreditCard className='text-5xl mb-5'/>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							dolore minus beatae alias unde, iusto vero, dolores nemo ab iste
							vel, veniam quas laboriosam error quaerat rerum dolorem ipsum! At!
							Cumque doloremque eius error veniam ad beatae fuga magni explicabo
							dicta facilis facere sapiente quae reiciendis officia quos rerum,
							voluptates possimus aliquam fugit maxime, inventore at. Magnam
							culpa nemo quidem?
						</p>
					</div>
				</div>
			
			</div>
		</>
	);
};

export default Mission;
