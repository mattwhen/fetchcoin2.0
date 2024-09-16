import { useRouteError } from 'react-router-dom';
import Nav from '../Nav/Nav';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<>
			<Nav />
            <div className=''>
			<div className='flex justify-center items-center'>
				<section id='error-page' className='flex items-center'>
					<section>
						<h1 className='text-4xl'>Oops! Page not found!</h1>
						{/* <p className='flex flex-col'>
							<i className='text-5xl'>{error.status}</i>
							<i>{error.data}</i>
						</p> */}
					</section>
					<section>
						<img src='../../images/404_image.png' alt='404 error'></img>
					</section>
				</section>
			</div>
            </div>
		</>
	);
}
