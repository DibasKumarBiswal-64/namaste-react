import { LOGO_URL } from "../utils/contants";

export const Header = () => {
    return (  <div className="header">
          <div className="logo-container">
          <img className="logo"
          src={LOGO_URL}/>
          </div>
          <div className="nav-items">
              <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Card</li>
              </ul>
          </div>
      </div>
    );
  };

  