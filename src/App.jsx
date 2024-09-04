import './App.css'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import History from './pages/History'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login';
import Register from './pages/Register';
import { Route,Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/his' element={<History/>} />
      <Route path='/reg' element={<Register/>} />
      <Route path='/log' element={<Login/>} />
      </Routes>
      <ToastContainer/>
      <Footer/>
    </>
  )
}

export default App
