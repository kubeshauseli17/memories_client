import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar({ currentUser, handleLogout }) {

	const loggedIn = (
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
		<div className="container flex flex-wrap justify-between items-center mx-auto">
			<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
			<Link to="/">
							<h1 className='text-[#00d8ff]'>📖 Memories</h1>
			</Link>
			</span>
		<button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
			<span className="sr-only">Open main menu</span>
			<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
		</button>
		<div className="hidden w-full md:block md:w-auto" id="navbar-default">
			<ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
			
			
			<li>
			<Link className="block text-lg py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/memories">
				<p>Memories</p>
			</Link>
			</li>
			<li>
			<Link className="block text-lg py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/memories/new">
					<p>New Memories</p>
			</Link>
			</li>
			<li>
				<Link className="block text-lg py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/profile">
					Profile
				</Link>
			</li>
			<li>
				<Link className="block text-lg py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" to="/">
					<span onClick={handleLogout}>Logout</span>
				</Link>
			</li>
			
			</ul>
		</div>
		</div>
		</nav>
	)
	const loggedOut = (
		// <div className='w-full h-[50px] bg-black'>
		// 	<div className=' max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
		// 		<Link to="/">
		// 			<h1 className='text-[#00d8ff]'>Memories</h1>
		// 		</Link>
		// 		<div className='hidden md:flex'>
		// 			<ul className='flex text-white items-center'>
		// 				{/* if the user is not logged in... */}
		// 				<Link to="/register">
		// 					Register
		// 				</Link>

		// 				<Link to="/login">
		// 					Login
		// 				</Link>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </div>

<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
<div className="container flex flex-wrap justify-between items-center mx-auto">
	<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
	<Link to="/">
					<h1 className='text-[#00d8ff]'>📖 Memories</h1>
	</Link>
	</span>
<button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
	<span className="sr-only">Open main menu</span>
	<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
</button>
<div className="hidden w-full md:block md:w-auto" id="navbar-default">
	<ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
	
	
	
	{/* if the user is not logged in... */}
	<li>
	<Link className="block text-lg py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/register">
 		Register
	</Link>
	</li>
	<li>
		<Link className="block text-lg py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/login">
			Login
		</Link>
	</li>
	
	</ul>
</div>
</div>
</nav>
	)
	return (
		<nav>
			{/* user always sees this section */}
			{currentUser ? loggedIn : loggedOut}
		</nav>
	)
}