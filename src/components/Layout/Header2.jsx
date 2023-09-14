import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const headerData = {
  name: "Mona Mohammed",
  designation: "Web Developer",
  imageThumb: "/images/monaM.jpg",
  social: {
    facebook: "https://www.facebook.com/monamohammedshaban97/",
    twitter: "https://twitter.com/moona97mohammed",
    instagram: "https://www.instagram.com/mona_mohammed_97/",
    linkedin: "https://www.linkedin.com/in/monamohammed1997/",
  },
};

function Header({ toggleHeader, toggleHandler }) {
  return (
    <>
      <div
        className={
          toggleHeader
            ? "mobile-header py-2 px-3 mt-4 align-items-center shadow-dark push"
            : "mobile-header py-2 px-3 mt-4 align-items-center shadow-dark"
        }
      >
        <NavLink to="/" className="site-title dot ml-2">
          {headerData.name}
        </NavLink>
        <NavLink to="/" className="logo">
          <img src={headerData.imageThumb} alt={headerData.name} />
        </NavLink>
        <nav>
          <ul className="vertical-menu scrollspy list-unstyled mb-0">
            <li className="home position-relative">
              <NavLink to="/" exact>
                <i className="icon-home"></i>
              </NavLink>
            </li>

            <li className="about position-relative">
              <NavLink to="/about">
                <i className="icon-user"></i>
              </NavLink>
            </li>

            <li className="works position-relative">
              <NavLink to="/works">
                <i className="icon-grid"></i>
              </NavLink>
            </li>

            <li className="contact position-relative">
              <NavLink to="/contact">
                <i className="icon-phone"></i>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* <NavLink to="/" className="logo">
          <img src={headerData.imageThumb} alt={headerData.name} />
        </NavLink>
        <NavLink to="/" className="site-title dot ml-2">
          {headerData.name}
        </NavLink> */}
      </div>

      <header
        className={
          toggleHeader
            ? "left float-left shadow-dark open"
            : "left float-left shadow-dark"
        }
      >
        <div className="header-inner d-flex align-items-start flex-column">
          <div class="wrapper">
            <svg className="header">
              <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                M
              </text>
            </svg>
          </div>

          <nav>
            <ul className="vertical-menu scrollspy">
              <li className="home position-relative">
                <NavLink to="/" exact>
                  <i className="icon-home"></i>
                </NavLink>
              </li>

              <li className="about position-relative">
                <NavLink to="/about">
                  <i className="icon-user"></i>
                </NavLink>
              </li>

              <li className="works position-relative">
                <NavLink to="/works">
                  <i className="icon-grid"></i>
                </NavLink>
              </li>

              <li className="contact position-relative">
                <NavLink to="/contact">
                  <i className="icon-phone"></i>
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="footer mt-auto">
            <ul className="social-icons list-inline">
              {!headerData.social.facebook ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.facebook}>
                    <FaFacebookF />
                  </a>
                </li>
              )}
              {!headerData.social.twitter ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.twitter}>
                    <FaTwitter />
                  </a>
                </li>
              )}
              {!headerData.social.instagram ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.instagram}>
                    <FaInstagram />
                  </a>
                </li>
              )}
              {!headerData.social.linkedin ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.linkedin}>
                    <FaLinkedinIn />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
