import Header from './components/Header';
import Nav from './components/Nav';
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
import { useReducer } from 'react';
import './App.css';

function App() {
  const [resTimes, dispatchResTimes] = useReducer(updateTimes, initializeTimes())

  function initializeTimes() {
    return [
      {label: "17:00", value: "17:00"},
      {label: "18:00", value: "18:00"},
      {label: "19:00", value: "19:00"},
      {label: "20:00", value: "20:00"},
      {label: "21:00", value: "21:00"},
      {label: "22:00", value: "22:00"}
    ];
  }

  function updateTimes(prevState, day) {
    return [
      {label: "17:00", value: "17:00"},
      {label: "18:00", value: "18:00"},
      {label: "19:00", value: "19:00"},
      {label: "20:00", value: "20:00"},
      {label: "21:00", value: "21:00"},
      {label: "22:00", value: "22:00"}
    ];
  }

  return (
    <>
      <Header/>
      <Nav/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/reservations' element={<Reservations resTimes={resTimes} dispatchResTimes={dispatchResTimes}/>} />
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
