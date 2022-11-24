import React from 'react';
import Home from './Home';
import { NavLink } from 'react-router-dom';
import {Route,Routes} from 'react-router-dom';
import Error from './Pages/Error';
import Services from './Pages/Service';
import About from './Pages/About';

const App = () =>{
    return(<>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route  element={<Error />}></Route>
        </Routes>
      </>
    )
}

export default App;