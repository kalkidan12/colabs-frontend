import React from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
	return (
		<nav className="bg-white fixed w-full z-20 top-0 left-0 p-2 md:p-0">
			<div className="p-2 sm:p-0 flex flex-wrap items-center justify-between md:justify-around mx-auto">
				<a href="https://kaliget.com/" className="flex items-center">
					<img src={logo} className="h-6 mr-3 sm:h-9" alt="kaliget Logo" />
					{/* <span className="self-center text-xl font-semibold whitespace-nowrap ">
						Colabs
					</span> */}
				</a>
				<div className="flex md:order-2">
					<button
						type="button"
						className="hidden md:flex text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mx-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
					>
						Post Project
					</button>
					<button
						type="button"
						className="md:hidden text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mx-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
					>
						Sign Up
					</button>
					<button
						data-collapse-toggle="navbar-sticky"
						type="button"
						className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
						aria-controls="navbar-sticky"
						aria-expanded="false"
					>
						{/* <span className="sr-only">Open main menu</span> */}
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							></path>
						</svg>
					</button>
				</div>
				<div
					className="items-center md:justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-sticky"
				>
					<ul className="flex flex-col md:items-center items-start p-2 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
						<li>
							<a
								href="#"
								className="block text-purple-700 py-2 pl-3 pr-4 text-dark rounded text-dark  text-l hover:text-purple-700 md:p-0"
								aria-current="page"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 pl-3 pr-4 text-dark rounded text-dark  text-l hover:text-purple-700 md:p-0"
							>
								Find Freelancer
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 pl-3 pr-4 text-dark rounded text-dark  text-l hover:text-purple-700 md:p-0"
							>
								Find Jobs
							</a>
						</li>
						<ul className="flex justify-between">
							<li className="mr-2 px-3 py-2 rounded-lg cursor-pointer">
								Log In
							</li>
							<button
								type="button"
								className="hidden md:block text-dark rounded-lg border-2   focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mx-3 md:mr-0 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
							>
								Sign Up
							</button>
						</ul>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
