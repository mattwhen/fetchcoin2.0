import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./Pagination.css";

const Pagination = ({ data, page, setPage, numOfCoinsPerPage }) => {
	const [currentRange, setCurrentRange] = useState([1, 2, 3]);

	const firstPage = 1;
	const lastPage = data.length / numOfCoinsPerPage;


	const handleNextClick = () => {
		if (page === lastPage) {
			return null;
		}

		const newPage = page + 1;
		const isInRange = currentRange.includes(newPage);

		if (isInRange) {
			setPage(page + 1);
		} else {
			setPage(page + 1);
			setCurrentRange(currentRange.map((num) => num + 1));
		}
	};

	const handlePreviousClick = () => { 
		// If the previous page falls outside of the currentRange, do something.
		// Update the current range values to the last five digits.

		const prevPage = page - 1; // [6, 7, 8, 9, 10] => [1, 2, 3, 4, 5]
		const isInRange = currentRange.includes(prevPage);

		if (page === firstPage) {
			return null;
		}
		if (isInRange) {
			setPage(page - 1);
		} else {
			setCurrentRange(currentRange.map((num) => num - 1));
			setPage(page - 1);
		}
	};

	const displayFirstPage = () => {
		setPage(1);
		setCurrentRange([1, 2, 3]);
	};

	const handlePageSkipAhead = () => {
		if (page > lastPage) {
			return null;
		}
		
		if (page + 5 >= lastPage) {
			setPage(lastPage);
			setCurrentRange([lastPage - 2, lastPage - 1, lastPage]);
		}
		if (page + 5 <= lastPage) {
			setPage(page + 5);
			setCurrentRange(currentRange.map((page) => page + 5));
		}
	};

	// TODO: implement logic similar to handlePageSkipAhead but reverse.
	const handlePageSkipBehind = () => {
		if (page < firstPage) {
			return null;
		}
		// Check IF the current page - 5 is less than 1. 
		// If it is, automatically set the page to 1. If we don't do this, the page jumps to a negative number. 
		// Otherwise, set the page - 5 and update the page range.
		if (page - 5 <= firstPage) {
			setPage(firstPage);
			setCurrentRange([firstPage, firstPage + 1, firstPage + 2])
		} else {
			setPage(page - 5);
			setCurrentRange(currentRange.map((page) => page - 5))
		}
	};

	const handleDisplayLastPage = () => {
		setPage(lastPage);
		setCurrentRange([lastPage - 2, lastPage - 1, lastPage]);
	};

	return (
		<>
			<div className="flex justify-center my-5 lg:max-w-4xl lg:m-auto lg:mt-5 lg:flex">
				<ul className="flex justify-evenly items-center w-full md:w-1/2">
					{/* Renders the PREVIOUS page of Coin data */}
					<li
						className="hidden md:cursor-pointer md:mr-8 md:flex md:align-middle"
						onClick={handlePreviousClick}
					>
						<FaArrowLeftLong className="w-6 h-6" />
					</li>
					{page > 3 ? (
						<li
							className="pagination-item pagination-item:hover"
							onClick={displayFirstPage}
						>
							{" "}
							1
						</li>
					) : null}
					{page > 3 ? (
						<li
							className="pagination-item pagination-item:hover"
							onClick={handlePageSkipBehind}
						>
							{" "}
							...
						</li>
					) : null}
					{/* Not visible until page count is greater than 5 */}
					{/* TODO: set the current page to be in between the number before and after. e.g. 5, (6), 7 or 8, (9), 10 */}
					{page > 3
						? currentRange.map((num, index) => (
								<li
									// Apply styling based on the current page being selected.
									onClick={() => setPage(num)}
									className={
										page === num
											? "selected-page"
											: "pagination-item pagination-item:hover"
									}
								>
									{num}
								</li>
						  ))
						: currentRange.map((num, index) => (
								<li
									// Apply styling based on the current page being selected.
									onClick={() => setPage(num)}
									className={
										page === num
											? "selected-page"
											: "pagination-item pagination-item:hover"
									}
								>
									{num}
								</li>
						  ))}
					<li
						className="pagination-item pagination-item:hover"
						onClick={handlePageSkipAhead}
					>
						{" "}
						...
					</li>
					<li
						className="pagination-item pagination-item:hover"
						onClick={handleDisplayLastPage}
					>
						{/* Displays the LAST page of Coin data */}
						{lastPage}
					</li>
					{/* Renders the NEXT page of Coin data */}
					<li className="hidden md:cursor-pointer md:ml-8 md:flex md:align-middle">
						<FaArrowRightLong className="w-6 h-6" onClick={handleNextClick} />
					</li>
				</ul>
			</div>
		</>
	);
};

export default Pagination;
