import { Link } from 'react-router-dom'
import '../components/PricingcardStyle.css'
const PricingCard=()=>{
    return(
        <div className='pricing'>
          <div className='card-container'>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>$ 100</p>
                <p>-3  Days </p>
                <p>- 3 Pges</p>
                <p>-Featired</p>
                <p>-Responsice Design-</p>
                <Link to="/contact" className='btn'>
                    PURCHASE NOW
                </Link>
            </div>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>$ 100</p>
                <p>-3  Days </p>
                <p>- 3 Pges</p>
                <p>-Featired</p>
                <p>-Responsice Design-</p>
                <Link to="/contact" className='btn'>
                    PURCHASE NOW
                </Link>
            </div>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>$ 100</p>
                <p>-3  Days </p>
                <p>- 3 Pges</p>
                <p>-Featired</p>
                <p>-Responsice Design-</p>
                <Link to="/contact" className='btn'>
                    PURCHASE NOW
                </Link>
            </div>
          </div>
        </div>
    )
}
export default PricingCard