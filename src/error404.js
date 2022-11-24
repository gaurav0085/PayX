import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './navbar';

const Error404 = () => {
  return (
    <>  
        <Navbar />
        <div id='notfound'>
            <div className='notfound-404'>
                <h1>404</h1>
            </div>
            <h2>We are Sorry , Page Not Found</h2>

            <NavLink to="/">Back to Homepage</NavLink>
        </div>
    </>
  )
}

export default Error404;