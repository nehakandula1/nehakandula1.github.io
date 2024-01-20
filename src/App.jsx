import './App.css'
import { MyNavbar } from './MyNavbar'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <div className='App'>
    <MyNavbar/>
    <Routes>
        <Route path="/" element = { <Home />} />
        <Route path="/Projects" element = { <Projects />} />
        <Route path="/Experience" element = { <Experience />} />
    </Routes>
    </div>   
    </>
  )
}

export default App
