import logosmall from './logosmall.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
    <footer className="footer">
        <div className='footContainer'>
            <div className='footRow'>
                <div className='footer-col'>
                    <img src={logosmall} alt="smaller logo" />
                </div>
                <div className='footer-col'>
                    <h4>Navigation</h4>
                    <ul>
                        <li><Link to='/' className='footerLink'>Home</Link></li>
                        <li><Link to='/about' className='footerLink'>About</Link></li>
                        <li><Link to='/menu' className='footerLink'>Menu</Link></li>
                        <li><Link to='/reservations' className='footerLink'>Reservations</Link></li>
                        <li><Link to='/order-online' className='footerLink'>Order Online</Link></li>
                        <li><Link to='/login' className='footerLink'>Log In</Link></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>Contact Us</h4>
                    <ul>
                        <li>Address:</li>
                        <li>Phone:</li>
                        <li>Email:</li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>Social Media</h4>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;