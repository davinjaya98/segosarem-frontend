import React, { useState ,Fragment } from 'react';
import logo from '../../../assets/images/endless-logo.png';
import { Link } from 'react-router-dom';
import { AlignLeft } from 'react-feather';

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [rightSidebar, setRightSidebar] = useState(true);

 const openCloseSidebar = () => {
    if (sidebar) {
      setSidebar(!sidebar)
      document.querySelector(".page-main-header").classList.remove('open');
      document.querySelector(".page-sidebar").classList.remove('open');
    } else {
      setSidebar(!sidebar)
      document.querySelector(".page-main-header").classList.add('open');
      document.querySelector(".page-sidebar").classList.add('open'); 
    }
  }

  return (
    <Fragment>
      <div className="page-main-header" >
        <div className="main-header-right row">
          <div className="main-header-left d-lg-none">
            <div className="logo-wrapper">
              <Link to="/dashboard/default">
                <img className="img-fluid" src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="mobile-sidebar d-block">
            <div className="media-body text-right switch-sm">
              <label className="switch">
                <a href="#javascript" onClick={() => openCloseSidebar()}>
                  <AlignLeft />
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
};
export default Header;