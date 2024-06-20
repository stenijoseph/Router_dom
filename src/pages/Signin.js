import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

const Signin = () => {
  return (
    <Layout><div className="flex mt-16 flex-col justify-center items-center rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold ">Sign in</h1>
		<p className="text-sm dark:text-gray-600">Sign in to access your account</p>
	</div>
	<form noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="k0mfjq" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="txb6ai" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-blue-600 dark:text-gray-50" fdprocessedid="v74jqj">Sign in</button>
			</div>
			
		</div>
		<p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
				<Link to="/signup" className="hover:underline dark:text-violet-600">Sign up</Link>
			</p>
		
	</form>
</div></Layout>
  )
}

export default Signin