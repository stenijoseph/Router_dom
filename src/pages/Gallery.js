import React from 'react'
import Layout from '../components/Layout/Layout'
import react1 from "../images/react1.png"
import react2 from "../images/react2.png"
import react3 from "../images/react3.jpg"
import react4 from "../images/react4.jpg"
import react5 from "../images/react5.jpg"
import react6 from "../images/react6.jpg"
import reacti from "../images/reacti.webp"
import react8 from "../images/react8.jpg"
import reactb from "../images/reactb.webp"
import reacty from "../images/reacty.jpg"

const Gallery = () => {
  return (
    <Layout>

<section className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src={reacty} className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 " src={react1} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 " src={react2}/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 " src={react3}/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 " src={react4} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 " src={react5}/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 " src={react6}/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 " src={react8}/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 " src={reacti} />
		<img src={reactb} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>


        </Layout>
  )
}

export default Gallery