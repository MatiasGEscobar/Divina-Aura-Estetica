import Home from './views/Home/Home.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import MisTurnos from './views/MisTurnos/MisTurnos.jsx';
import Register from './views/Register/Register.jsx';
import Login from './views/Login/Login.jsx';
import {Routes, Route} from 'react-router-dom';
import "./App.css";

function App() {

  return (
    <>
    <NavBar />
    <div className="container">
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/' element={<MisTurnos />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
    </>
  )
}

export default App
