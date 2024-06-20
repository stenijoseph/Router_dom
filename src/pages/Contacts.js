import React from 'react'
import Layout from '../components/Layout/Layout'

const Contacts = () => {
  return (
    <Layout>
<section className="flex mt-16 py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4 ">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<label className="block mb-2">
				
				<input type="text" placeholder="  enter your address" className="block w-full  border border-gray-300 rounded-md py-6 shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 mt-2 px-4" fdprocessedid="3gvefm" />
			</label>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<label className="block mb-2">
				
				<input type="text" placeholder="  enter your number" className="block w-full  border border-gray-300 rounded-md py-2 shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 mt-2 px-4" fdprocessedid="3gvefm" />
			</label>
				</p>
				
				
			</div>
		</div>
		<form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block mb-2">
				<span className="mb-2 ">Full name</span>
				<input type="text" placeholder="  Fullname" className="block w-full  border border-gray-300 rounded-md py-2 shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 mt-2 " fdprocessedid="3gvefm" />
			</label>
			<label className="block ">
				<span className="mb-2 mt-4">Email address</span>
				<input type="email" placeholder="  enter your email" className="block w-full border border-gray-300 py-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 mt-2" fdprocessedid="3lg8t6" />
			</label>
			<label className="block ">
				<span className="mb-1">Message</span>
				<textarea rows="3" className="block w-full  border border-gray-300 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 mt-2"></textarea>
			</label>
			<button type="button" className="self-center px-6 py-2 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-blue-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600" fdprocessedid="31fy6p">Submit</button>
		</form>
	</div>
</section>
    </Layout>
  )
}

export default Contacts