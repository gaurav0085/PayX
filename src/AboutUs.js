import React, { useState } from 'react';
import howToUse from './API/howToUse';

const AboutUs = () => {

  const[aboutData,setaboutData] = useState(howToUse);

  return (
    <>
        <section className='common-section our-services '>
                  <div className='col-12 col-lg-12 our-services-list '>
                  
                    <h3 className='mini-title'>
                      --AVAILABLE @ GOOGLE PLAY STORE AND APP STORE
                    </h3>
                    <h1 className='main-heading'>How to use the App?</h1>

                          {aboutData.map((curElem)=>{
                            const{id,title,info} = curElem;
                                return( <>
                                  <div className='row our-services-info' key={id}>
                                  <div className='col-10 our-services-data'>
                                        <h2>{title}</h2>
                                        <p className='main-hero-para'>
                                          {info}
                                        </p>
                                  </div>
                              </div>
                              </>)
                                }
                          )}    
                    </div>
              
            
        </section>
    </>
  )
}

export default AboutUs