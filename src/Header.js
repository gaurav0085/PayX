import React from 'react';
import tr from './images/tr.png';

export const Header = () => {
  return (
    <>
    <header>
        <section className='container main-hero-container'>
            <div className='row'>
                <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start '>
                    <h1 className='display-2'>Online Payment Made Easy For All</h1>
                    <p className='main-hero-para'>
                            As the name implies, PayX is a user friendly app that allows users to transfer money to their peers, 
                            through very simple steps 
                    </p>
                    <h3>Get early access for you</h3>
                    <div className='input-group mt-3'>
                        <input type="text" className='rounded-pill w-75 me-3 p-2 form-control-text' placeholder="Enter your email"/>
                        <div className="input-group-button">Get it now</div>
                    </div>
                </div>
                <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center'>
                    <img src={tr} alt="heroimg" className='img-fluid '/>
                </div>
            </div>
        </section>
    </header>
    </>
  )
  }
export default Header;