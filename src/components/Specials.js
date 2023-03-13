import {Link} from 'react-router-dom';
import grilledOctopus from './grilled-octopus.png';
import moussaka from './moussaka.png';
import lambGyro from './lamb-gyro.png';

function Specials() {
    return(
        <>
            <div className='specials'>
                <h1>Specials</h1>
                <button className='specials-button'><Link to='/order-online' className='order-link'>Order Online</Link></button>
            </div>
            <div className='specials-row'>
                <div className='specials-column'>
                    <div className='specials-card'>
                        <img src={grilledOctopus} alt="grilled octopus dish" className='card-pic'/>
                        <div className='card-container'>
                            <h3 className='card-title'><b>Grilled Octopus</b> <span>$11.99</span></h3>
                            <p>Tender and juicy octopus, marinated in olive oil, lemon, and oregano, grilled to perfection, and served with a side of garlic aioli.</p>
                        </div>
                    </div>
                </div>
                <div className='specials-column'>
                    <div className='specials-card'>
                        <img src={moussaka} alt="moussaka dish" className='card-pic'/>
                        <div className='card-container'>
                            <h3 className='card-title'><b>Moussaka</b> <span>$15.99</span></h3>
                            <p>Layers of eggplant, ground beef, and creamy béchamel sauce, baked until golden brown and delicious. Served with a Greek salad on the side.</p>
                        </div>
                    </div>
                </div>
                <div className='specials-column'>
                    <div className='specials-card'>
                        <img src={lambGyro} alt="lamb gyro dish" className='card-pic'/>
                        <div className='card-container'>
                            <h3 className='card-title'><b>Lamb Gyro</b> <span>$14.99</span></h3>
                            <p>Slow-roasted lamb, thinly sliced and wrapped in a warm pita bread with fresh tomato, onion, and tzatziki sauce. Served with a side of seasoned fries or a Greek salad.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Specials;