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
import ResConf from './components/pages/ResConf';
import OrderOnline from './components/pages/OrderOnline';
import LogIn from './components/pages/LogIn';
import { Route, Routes } from 'react-router-dom'
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from './temp';
import { useNavigate } from 'react-router-dom';
import './App.css';

export function initializeTimes() {
  const day = new Date();
  const apiOut = fetchAPI(day);
  return apiOut;
}

export function updateTimes(prevState, day) {
  const updateOut = fetchAPI(day);
  return updateOut;
}


function App() {
  const [resTimes, dispatchResTimes] = useReducer(updateTimes, initializeTimes());

  let navigate = useNavigate();
  function submitForm(formData) {
    const valid = submitAPI(formData);
    if (valid) {
      let path = '/res-conf';
      navigate(path);
    }
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
          <Route path='/reservations' element={<Reservations resTimes={resTimes} dispatchResTimes={dispatchResTimes} submitForm={submitForm}/>} />
          <Route path='/res-conf' element={<ResConf />} />
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
