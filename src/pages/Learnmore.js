import React from 'react'
import Layout from '../components/Layout/Layout'


const Learnmore = () => {
  return (
    <Layout>
      <div className=' px-5 py-10 text-black bg-gray-100 mt-10'>
      <h1 className='font-bold text-xl'> What is react-router-dom ?</h1>
       <p className='mt-4 text-lg'>
       React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.

The major advantage of react-router is that the page does not have to be refreshed when a link to another page is clicked, for example. Moreover, it is fast, very fast compared to traditional page navigation. This means that the user experience is better and the app has overall better performance.

React Router Dom v6 has many useful components and to create fully functioning routing, you need most of these.
       </p>
       
<h3 className=" text-lg mt-4 "> 1.Router(usually imported as BrowserRouter):  It is the parent component that is used to store all of the other components. Everything within this will be part of the routing functionality</h3>


<h3  className=" text-lg mt-4"> 2.Routes: routes are used to define the navigation paths within a single-page application (SPA). Routes determine which components should be rendered based on the current URL or location of the application</h3>


<h3  className=" text-lg mt-4"> 3.Route: This component checks the current URL and displays the component associated with that exact path. All routes are placed within the Routes components.</h3>

<h3 className=" text-lg mt-4"> 4.Link: Link component is used to create links to different routes.</h3>

      </div>
    </Layout>
  )
}

export default Learnmore