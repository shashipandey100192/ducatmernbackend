import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Loginpage from './modules/auth/Loginpage';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Landingpage from './modules/dashboard/Landingpage';
import Navbar from './modules/shares/Navbar';
import Registor from './modules/auth/Registor';
import Detailspage from './modules/dashboard/Detailspage';
import Editpage from './modules/dashboard/Editpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='' element={<Loginpage/>}></Route>
        <Route path='dashboard' element={<Landingpage/>}></Route>
        <Route path='dashboard/view/:id' element={<Detailspage/>}></Route>
        <Route path='dashboard/edit/:id' element={<Editpage/>}></Route>
        <Route path='registor' element={<Registor/>}/>
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);
