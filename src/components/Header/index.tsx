import { FunctionComponent } from 'react'

import logo from "../../assets/png/zona.png";
import Button from '../Button';

// import { ReactComponent as Logo } from "../../assets/zona.svg"

const Header: FunctionComponent = () => {
  return (
    <div className="navBarContainer">
      <div className='leftNavGroup'>
        <div className='nav imageContainer'>
          <img src={logo} alt="Flowers in Chania" width="100" height="100"/>
        </div>
        <div className='nav locationContainer'>
          <Button onClick={() => console.log("Location button clicked")} className='locationButton'>
            Kithoor, Alwar
          </Button>
        </div>
      </div>
      <div className='rightNavGroup'>
        <div className='nav rightNavButton'>
          <Button
            onClick={() => console.log("Broker button")}
            className='button'
            variant="primary"
          >
            Broker Sign up
          </Button>
        </div>
        <div className='nav rightNavButton'>
          <Button
            onClick={() => console.log("Download app")}
            className='button'
            variant="primary"
          >
            Download App
          </Button>
        </div>
        <div className='nav rightNavButton'>
          <Button
            onClick={() => console.log("List Property")}
            className='button'
            variant="primary"
          >
            List Property
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header