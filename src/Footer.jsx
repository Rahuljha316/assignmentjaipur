import insta from './assets/insta.svg'
import fb from './assets/fb.svg'
import twitter from './assets/twitter.svg'
import whatsapp from './assets/whatsapp.svg'
const Footer = ( ) => {
    return (
        <>
        <div className="footer">
            <div className="footer-1">
                <div className="flex-2">
                    <h3 className="custom-text">
                        <span>Ship</span>
                        <span>Up</span>
                    </h3>
                    <ul>
                        <li><p className='small'>ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint</p></li>
                    </ul>
                    
                </div>
                <div className="flex-1">
                    <h3 className="ship-up">Explore</h3>
                    <ul className='small'>
                        <li >About Us </li>
                        <li>Our Warehouses </li>
                        <li>Blog </li>
                        <li>News and Media</li>
                    </ul>
                    
                </div>
                <div className="flex-1">
                    <h3 className="ship-up">Legal</h3>
                    <ul className='small'>
                        <li>Terms </li>
                        <li>Privacy </li>
                        
                    </ul>
                    
                </div>
                <div className="flex-1 ">
                    <h3 className="ship-up">Social Media</h3>
                    <div className="social-media">
                        <div className="circular-icon">
                            <img src={fb} alt="fb" />
                        </div>
                        <div className="circular-icon">
                            <img src={twitter} alt="twitter" />
                        </div>
                        <div className="circular-icon">
                            <img src={whatsapp} alt="whatsapp" />
                        </div>
                        <div className="circular-icon">
                            <img src={insta} alt="insta" />
                        </div>
                        </div>    
                </div>

                
                
            </div>
            <hr className="hr"/>
            <div className="logo-text">
            <span className="ship">Ship</span>
            <span className="up">Up</span>
            <span className="ng">.ng</span>
        </div>
            </div>
        
        </>
    )
}

export default Footer;