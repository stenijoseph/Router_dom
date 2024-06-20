import React from 'react'
import Layout from '../components/Layout/Layout'
import reacti from "../images/reacti.webp"
import react2 from "../images/react2.png"
import reacty from "../images/reacty.jpg"
import react4 from "../images/react4.jpg"
import react5 from "../images/react5.jpg"
import react8 from "../images/react8.jpg"
import reactb from "../images/reactb.webp"

const Blogs = () => {
  return (
    <Layout><section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={react4} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">SEO friendly</h3>
				<span className="text-xs dark:text-gray-600">February 19, 2021</span>
				<p>SEO is about making it easier for developers to find the right content for the user. When a user makes a search, search engines platforms like Google, Yahoo, Bing or Baidu try to find which page is the most relevant to that specific search. React affects the SEO by giving you a SPA (Single Page Application) which requires Javascript to show the content on the page which can then be rendered and indexed.</p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={react5}/>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Performance</h3>
					<span className="text-xs dark:text-gray-600">January 21, 2021</span>
					<p>React JS was designed to provide high performance in mind. The core of the framework offers a virtual DOM program and server-side rendering, which makes complex apps run extremely fast.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={reacty} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Flexibility</h3>
					<span className="text-xs dark:text-gray-600">January 22, 2021</span>
					<p>Compared to other frontend frameworks, the React code is easier to maintain and is flexible due to its modular structure. This flexibility, in turn, saves a huge amount of time and cost for businesses.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={react2} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Static Server Rendering Optimizations</h3>
					<span className="text-xs dark:text-gray-600">January 23, 2021</span>
					<p>Static Site Generation (SSG) and Incremental Static Regeneration (ISR) are great ways to get performance
					
					for cacheable pages, but we think we can add features to improve performance of dynamic Server Side Rendering 
					(SSR) – especially when most but not all of the content is cacheable. </p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={reacti} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Guarantees stable code:
</h3>
					<span className="text-xs dark:text-gray-600">January 24, 2021</span>
					<p>ReactJS solely use downward data flow to ensure that even minor changes in the child structures won’t have an impact on their parents. Developers only alter an object’s state when they change it; only specific components will then be updated. The stability of the code and consistent app performance are guaranteed by this data-binding mechanism.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={reactb} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Transition Tracing</h3>
					<span className="text-xs dark:text-gray-600">January 25, 2021</span>
					<p>Currently, React has two profiling tools. The original Profiler shows an overview of all the commits in a profiling session. For each commit, it also shows all components that rendered and the amount of time it took for them to render.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={react8} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Reusable Components</h3>
					<span className="text-xs dark:text-gray-600">January 26, 2021</span>
					<p>One of the main benefits of using React JS is its potential to reuse components. It saves time for developers as they don’t have to write various codes for the same features. Furthermore, if any changes are made in any particular part, it will not affect other parts of the application.</p>
				</div>
			</a>
		</div>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
		</div>
	</div>
</section></Layout>
  )
}

export default Blogs