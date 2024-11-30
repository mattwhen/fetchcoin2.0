import { useGetCoinsQuery } from "@/api/coinAll";
import React from "react";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./Pagination.css";

interface PaginationProps {
	data: number;
	page: number;
	setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ data, page, setPage }) => {
	const { data: coin, isError, isLoading } = useGetCoinsQuery({});
	const [currentRange, setCurrentRange] = useState([1, 2, 3]);

	const numOfCoinsPerPage = 20;

	console.log("Page:", page);
	console.log(currentRange);

	const firstPage = 1;
	const lastPage = coin.result.length / numOfCoinsPerPage;

	const handleNextClick = () => {
		console.log("What page is this?", page);

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
		// If the previous page falls outside of the currentRange, Update the current range values to the last five digits.
		const prevPage = page - 1;
		const isInRange = currentRange.includes(prevPage);

		if (page === firstPage) {
			return;
		}
		if (page < 2) {
			setCurrentRange([1, 2, 3]);
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
			return;
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

	const handlePageSkipBehind = () => {
		if (page < firstPage) {
			return null;
		}
		if (page - 5 <= firstPage) {
			setPage(firstPage);
			setCurrentRange([firstPage, firstPage + 1, firstPage + 2]);
		} else {
			setPage(page - 5);
			setCurrentRange(currentRange.map((page) => page - 5));
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
					{/* TODO: set the current page to be in between the number before and after. e.g. 5, (6), 7 or 8, (9), 10 */}
					{page > 3
						? currentRange.map((num, index) => (
								<li
									key={index}
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
									key={index}
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
