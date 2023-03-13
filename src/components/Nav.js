import logo from './logo.png';
import { Link } from 'react-router-dom';

function Nav() {
    const logoPic = <img src={logo} alt="logo" />;
    return (
    <nav className='nav'>
        <ul>
            <li><Link to='/'>{logoPic}</Link></li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/reservations'>Reservations</Link></li>
            <li><Link to='/order-online'>Order Online</Link></li>
            <li><Link to='/login'>Log In</Link></li>
        </ul>
    </nav>
    );
}

export default Nav;