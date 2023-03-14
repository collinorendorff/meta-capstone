import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Hero from './components/Hero';
import Specials from './components/Specials';
import CustomersSay from './components/CustomersSay';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Menu from './components/pages/Menu';
import Reservations from './components/pages/Reservations';
import OrderOnline from './components/pages/OrderOnline';
import LogIn from './components/pages/LogIn';
import { Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <Main/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/reservations' element={<Reservations/>} />
          <Route path='/order-online' element={<OrderOnline/>} />
          <Route path='/login' element={<LogIn/>} />
        </Routes>
      </div>
      <Hero/>
      <Specials/>
      <CustomersSay/>
      <Footer/>
    </>
  );
}

export default App;
