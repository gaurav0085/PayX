import React, { useState } from 'react';
import servicesApi from './API/servicesApi';

const Services = () => {
    const[Service,setService]=useState(servicesApi);
    
    return (
    <>
    <section className='services-main-container'>
        <div className='container service-container'>
            <h1 className='main-heading text-center fw-bold'>How to send Money</h1>
            <div className='row' >
            {Service.map((curElem)=>{
                const{id,logo,title,info}=curElem;
                return(
               
                <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv' key={id}>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h4 className='sub-heading'>{title}</h4>
                    <p className='main-hero-para w-100'>{info}</p>
                </div>
            
                )
            })}
            
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Services