import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import './assets/css/style.scss';
import Services from './components/frontend/Services';
import Projects from './components/frontend/Projects';
import Contact from './components/frontend/Contact';
import Login from './components/backend/login';
import Dashboard from './components/backend/Dashboard';
import { ToastContainer} from 'react-toastify';
import RequireAuth from './components/common/RequireAuth';
import {default as ShowServices} from './components/backend/services/show';
import {default as CreateService} from './components/backend/services/Create';
import {default as EditService} from './components/backend/services/Edit';

import {default as ShowProjects} from './components/backend/projects/Show';
import {default as CreateProjects} from './components/backend/projects/Create';
import {default as EditProjects} from './components/backend/projects/Edit';

import {default as ShowTestimonials} from './components/backend/testimonials/Show';




function App() {
  

  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />           
            <Route path='/projects' element={<Projects/>} />           
                      
            <Route path='/contact' element={<Contact/>} /> 
            <Route path='/admin/login' element={<Login/>} />    

            <Route path='/admin/dashboard' element={
              <RequireAuth>
                <Dashboard/>
              </RequireAuth>
            } />    

            <Route path='/admin/services' element={
              <RequireAuth>
                <ShowServices/>
              </RequireAuth>
            } />

            <Route path='/admin/services/create' element={
              <RequireAuth>
                <CreateService/>
              </RequireAuth>
            } />

            <Route path='/admin/services/edit/:id' element={
              <RequireAuth>
                <EditService/>
              </RequireAuth>
            } />

            <Route path='/admin/projects' element={
              <RequireAuth>
                <ShowProjects/>
              </RequireAuth>
            } />

            <Route path='/admin/projects/create' element={
              <RequireAuth>
                <CreateProjects/>
              </RequireAuth>
            } />

            <Route path='/admin/projects/edit/:id' element={
              <RequireAuth>
                <EditProjects/>
              </RequireAuth>
            } />
            
            <Route path='/admin/testimonials' element={
              <RequireAuth>
                <ShowTestimonials/>
              </RequireAuth>
            } />

        </Routes>
     </BrowserRouter>
     <ToastContainer 
        position="top-right"
        autoClose={2000}
     />
    </>
  )
}

export default App
