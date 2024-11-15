import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import './assets/css/style.scss';
import Services from './components/frontend/Services';
import Projects from './components/frontend/Projects';


function App() {
  

  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />           
            <Route path='/projects' element={<Projects/>} />           
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
