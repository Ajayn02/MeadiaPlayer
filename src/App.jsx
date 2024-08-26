import './App.css'
import './bootstrap.min.css'
import History from './pages/History'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/his' element={<History/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
