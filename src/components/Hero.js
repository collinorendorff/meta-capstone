import chef from './girl-chef-cooking.png';
import bread from './hero-bread.png';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="hero">
            <div className='hero-text'>
                <h2 className="hero-heading">Little Lemon</h2>
                <h3 className="hero-location">Chicago</h3>
                <p className="hero-description">Little Lemon is a Greek and Mediterranean restaurant that serves a variety of authentic dishes, from gyros and souvlaki to hummus and falafel, all made with fresh ingredients and traditional recipes.</p>
                <button className='hero-button'><Link to='/reservations' className='reserve-link'>Reserve a Table</Link></button>
            </div>
                <img src={chef} alt="chef cooking" className='hero-image1'/>
                <img src={bread} alt="gourmet greek bread" className='hero-image2'/>
        </div>
    );
}

export default Hero;