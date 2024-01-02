
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Products from './Pages/Products';
import Navbar from './components/Navbar';

function App() {
  return (
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Signup/>} />

        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/products' element={<Products/>} />
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
