import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'


const Homepage = () => {
  return ( 
   <Layout>
     <section>
	<div className="dark:bg-gray-600">
		<div className=" mt-12 container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50 ">React Dom Project</h1>
			<p className="mt-2 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">DOM stands for 'Document Object Model'. In simple terms, it is a structured representation of the HTML elements that are present in a webpage or web app.DOM represents the entire UI of your application</p>
			<div className="flex flex-wrap justify-center">
				<Link to="/getstarted" type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900 hover:text-white hover:bg-black" fdprocessedid="lb4ui">Get started</Link>
				<Link to="/learnmore" type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50 hover:text-white hover:bg-black" fdprocessedid="w9p8sa">Learn more</Link>
			</div>
		</div>
	</div>
	<img src="https://www.freecodecamp.org/news/content/images/2022/03/photo-1619410283995-43d9134e7656.jpeg" alt="" className=" h-[500px] w-4/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
</section>
   </Layout>
  )
}

export default Homepage