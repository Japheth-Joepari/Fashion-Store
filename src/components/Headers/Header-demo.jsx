import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleMobileMenu } from "../../Redux/Mobile/moile.actions";
import { selectMenuHidden } from "../../Redux/Mobile/mobile.selector";
import { selectCurrentUser } from "../../Redux/User/user.selector";
import { logOut } from "../../Redux/User/user.actions";
// Resources
import { ReactComponent as Logo } from "../../Images/logo1.svg";
//utils
import MobileMenu from "../MobileMenu/mobileMenu";
import CartModal from "../Cart/CartModal";
import SearchBar from "../SearchBar/SearchBar";
import Toastify from "toastify-js";
import WishList from "./Wish-list";

const Header = ({ hidden, toggleMobileMenu, currentUser, history }) => {
  return (
    <div>
      <header className="header header-6">
        <div className="header-top">
          <div className="container">
            <div className="header-left">
              <ul className="top-menu top-link-menu d-none d-md-block">
                <li>
                  <a href="/">Links</a>
                  <ul>
                    <li>
                      <a href="tel:#">
                        <i className="icon-phone"></i>Call: +234 704 1970 128
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <div className="social-icons social-icons-color">
                <a
                  href="#"
                  className="social-icon"
                  title="Facebook"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="icon-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="social-icon"
                  title="Twitter"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="icon-twitter"></i>
                </a>
                <a
                  href="#"
                  rel="noreferrer"
                  className="social-icon"
                  title="Instagram"
                  target="_blank"
                >
                  <i className="icon-instagram"></i>
                </a>
                <a
                  href="#"
                  className="social-icon"
                  title="Youtube"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="icon-github"></i>
                </a>
              </div>
              <ul className="top-menu top-link-menu">
                <li>
                  <li>
                    <a href="#signin-modal" data-toggle="modal">
                      <i className="icon-user"></i>Login
                    </a>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-middle">
          <div className="container">
            <div className="header-left">
              <SearchBar />
            </div>
            <div className="header-center">
              <a href="/" className="logo">
                {/* <img src={logo} alt='logos' style={{height: 125 , width: 130}}></img> */}
                <Logo
                  onClick={() => {
                    history.push("/");
                  }}
                />
              </a>
            </div>
            <div className="header-right">
              <WishList />

              <CartModal />
            </div>
          </div>
        </div>
        <div className="header-bottom sticky-header">
          <div className="container">
            <div className="header-left">
              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  <li className="megamenu-container active">
                    <a href="/" className="sf-with-ul">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sf-with-ul">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sf-with-ul">
                      About
                    </a>
                  </li>

                  <li>
                    <a href="#" className="sf-with-ul">
                      Shop
                    </a>
                  </li>

                  <li>
                    <a href="#" className="sf-with-ul">
                      Meet / Hire a Tailor
                    </a>
                  </li>
                </ul>
              </nav>
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars" onClick={toggleMobileMenu}></i>
              </button>
            </div>
            <div className="header-right">
              <i className="la la-lightbulb-o"></i>
              <p>
                {currentUser ? (
                  <span>{`Howdy, ${currentUser.displayName}`}</span>
                ) : (
                  <span>Discounts Up to 20% Off</span>
                )}
              </p>
            </div>
          </div>
        </div>
        {hidden === false ? <MobileMenu /> : ""}
      </header>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectMenuHidden,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMobileMenu: () => dispatch(toggleMobileMenu()),
  logOut: () => dispatch(logOut()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
