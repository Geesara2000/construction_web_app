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
