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
