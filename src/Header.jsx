import { Button } from "react-bootstrap";
import CompanyDetails from "./CompanyDetails";
import { useState } from "react";

const Header = ( ) => {
    const [showCompanyDetails, setShowCompanyDetails] = useState(false);

  const handleCompanyClick = () => {
    setShowCompanyDetails(!showCompanyDetails);
  };

  const handleCompanyHover = () => {
    setShowCompanyDetails(true);
  };

  const handleCompanyLeave = () => {
    // setShowCompanyDetails(false);
  };
    return(
        <>
            <div  className="main-header">
                <div>
                    <span className="ship-text">Ship</span>
                    <span className="up">Up</span>
                </div><div className="header-dropdowns">
                    <div onClick={handleCompanyClick}
        onMouseEnter={handleCompanyHover}
        onMouseLeave={handleCompanyLeave}>Company <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></div>
                    <div>Services</div>
                    

                </div>
                <div className="header-tabs">
                    
                    <div>Solutions</div>
                    <div>Industries</div>
                    <div>Insights</div>
                    <div>News And Media</div>

                </div>
                <div className="headerbtns">
                    <button className='normalBtn' size="lg">
                        Request Qoute
                    </button>
                    <button className="coloredBtn" size="lg">
                        Join Now
                    </button>
                </div>

            </div>
            {showCompanyDetails && <CompanyDetails />}
        </>
    )

}
export default Header;