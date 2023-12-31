import map from './assets/map-pin.svg'
import arrow from './assets/arrow-right.svg'
import frame from './assets/frame.svg'
import user from './assets/user-plus.svg'
import image from './assets/image4.png'
const CompanyDetails = ( ) => {
    return (
        <>
        <div className="companydetails">
            <div className='detail-1'>
                <h3>Company</h3>
                <div className='submenus'>
                    <span className='subicons'>
                        <img src={user} alt='use'/>
                    </span>
                    <div>
                        <div className='bold'>About US</div>
                        <div>The people behind ShipUp and the story of shared success.
                        </div>
                    </div>
                </div>
                <div className='submenus'>
                    <span className='subicons'>
                        <img src={map} alt='mp'/>
                    </span>
                    <div>
                        <div className='bold'>Partner With Us</div>
                        <div>Collbration with ShipUp and drive mutual growth
                        </div>
                    </div>
                </div>
                <div className='d-flex submenus'>
                    <span>
                        <img src={frame} alt='fr'/>
                    </span>
                    <div>
                        <div className='bold'>Career</div>
                        <div>Join the ShipUp
                        </div>
                    </div>
                </div>
            </div>    
            <div className='detail-1'>
                <h3>Newsroom</h3>
                <div>
                    <img src={image} alt='user'/>
                </div>
                <div>News and awards</div>
                <div className='learn'>Learn More <span><img src={arrow} alt='arrow'/></span></div>

            </div>
        </div>
        </>
    )
}
export default CompanyDetails