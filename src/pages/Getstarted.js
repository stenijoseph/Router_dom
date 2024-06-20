import React from 'react'
import Layout from '../components/Layout/Layout'

const Getstarted = () => {
  return (

      <Layout>
        <div className=' px-5 py-10 text-black bg-gray-100 mt-10'>
      <h1 className='font-bold text-xl'> What is React ?</h1>
       <p className='mt-4 text-lg'>
       React is a JavaScript library for building user interfaces (UIs) on the web. React is a declarative, component based library that allows developers to build reusable UI components and It follows the Virtual DOM (Document Object Model) approach, which optimizes rendering performance by minimizing DOM updates. React is fast and works well with other tools and libraries.
       </p>
       <h1 className="font-bold text-xl mt-4">History of React</h1>
<p className='mt-4 text-lg'>React was invented by Facebook developers who found the traditional DOM slow. By implementing a virtual DOM, React addressed this issue and gained popularity rapidly.
The current stable version of ReactJS is 18.2.0, released on June 14, 2022. The library continues to evolve, introducing new features with each update.</p>
<h1 className="font-bold text-xl mt-4">How does React work?</h1>
<p className='mt-4 text-lg'>React operates by creating an in-memory virtual DOM rather than directly manipulating the browser’s DOM. It performs necessary manipulations within this virtual representation before applying changes to the actual browser DOM. React is efficient, altering only what requires modification.</p>
<h1 className="font-bold text-xl mt-4 ">Features of React</h1>
<p className='mt-4 text-lg'>React is one of the most demanding JavaScript librarys because it is equipped with a ton of features which makes it faster and production-ready. Below are the few features of React.
</p>
<h3 className=" text-lg mt-4 font-semibold">1. Component-Based Architecture</h3>
<p className=" text-lg mt-4">React provides the feature to break down the UI into smaller, self-contained components. Each component can have its own state and props.</p>

<h3  className=" text-lg mt-4 font-semibold">2. JSX (JavaScript Syntax Extension)</h3>
<p className=" text-lg mt-4">JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript files. It makes React components more readable and expressive.</p>

<h3  className=" text-lg mt-4 font-semibold">3. Virtual DOM</h3>
<p  className=" text-lg mt-4">React maintains a lightweight representation of the actual DOM in memory. When changes occur, React efficiently updates only the necessary parts of the DOM.</p>
<h3 className=" text-lg mt-4 font-semibold">4. One-way Data Binding</h3>
<p className=" text-lg mt-4">One-way data binding, the name itself says that it is a one-direction flow. The data in react flows only in one direction i.e. the data is transferred from top to bottom i.e. from parent components to child components. The properties(props) in the child component cannot return the data to its parent component but it can have communication with the parent components to modify the states according to the provided inputs.</p>
<h3 className=" text-lg mt-4 font-semibold" >5. Performance</h3>
<p className=" text-lg mt-4">React uses virtual DOM and updates only the modified parts. So , this makes the DOM to run faster. DOM executes in memory so we can create separate components which makes the DOM run faster.</p>

<h3 className=" text-lg mt-4 font-semibold" >6. Components</h3>
<p className=" text-lg mt-4">React divides the web page into multiple components as it is component-based. Each component is a part of the UI design which has its own logic and design as shown in the below image. So the component logic which is written in JavaScript makes it easy and run faster and can be reusable.</p>

<h3 className=" text-lg mt-4 font-semibold" >7. Single-Page Applications (SPAs)</h3>
<p className=" text-lg mt-4">React is recommended in creating SPAs, allowing smooth content updates without page reloads. Its focus on reusable components makes it ideal for real-time applications.</p>
      </div>
      </Layout>
   
  )
}

export default Getstarted