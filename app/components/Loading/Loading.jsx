const Loading = ({ mapHeaders }) => {
	return (
		<>
			{/* <section className='flex justify-center items-center overflow-x-auto border-2 border-sky-700 rounded-md mx-2 lg:w-[1080px] lg:h-[400px] lg:m-auto'>
				<table className='table-auto'>
					<tbody className='w-40'></tbody>
				</table>
						<div className=''>
							<div id='loader'></div>
						</div>
			</section> */}
			<section className="flex justify-center items-center overflow-x-auto rounded-md mx-2 lg:w-[1080px] lg:h-[400px] lg:m-auto">
				<table className="table-auto">
					<tbody className="w-40"></tbody>
				</table>
				<div className=''>
							<div id='loader'></div>
						</div>
			</section>
		</>
	);
};

export default Loading;
