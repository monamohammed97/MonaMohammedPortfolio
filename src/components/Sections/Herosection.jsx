import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
// import { Link as Link } from "react-scroll";

const herosectionData = {
  aboutMe:
    "He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
};

function Herosection() {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      // style={{ backgroundImage: "url(/images/hero.jpg)" }}
    >
      <div className="cta mx-auto mt-2">
        <div>
          <h1 className="mt-0 mb-4 fadeIn delay">
            <span className="animation-variation">I</span>
            <span className="animation-variation">'m</span>
            <span> </span>
            <span className="animation-variation">M</span>
            <span className="animation-variation">o</span>
            <span className="animation-variation">n</span>
            <span className="animation-variation">a</span>
            <span> </span>
            <br />
            <span className="animation-variation">M</span>
            <span className="animation-variation">o</span>
            <span className="animation-variation">h</span>
            <span className="animation-variation">a</span>
            <span className="animation-variation">m</span>
            <span className="animation-variation">m</span>
            <span className="animation-variation">e</span>
            <span className="animation-variation">d</span>
            <span className="dot"></span>
          </h1>
          <p className="mb-4 fadeIn font-60 delay_5">Web Developer</p>
          <Link
            activeClass="active"
            to="/works"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}
            className="btn btn-default btn-lg mr-3 delay_9 fadeIn"
          >
            <i className="icon-grid"></i>View Portfolio
          </Link>
          <div
            className="spacer d-md-none d-lg-none d-sm-none"
            data-height="10"
          ></div>
          <Link
            activeClass="active"
            to={{
              pathname: "mailto:mona00mona1997@gmail.com",
            }}
            spy={true}
            smooth={true}
            duration={500}
            offset={50}
            target="_blank"
            className="btn btn-border-light btn-lg delay_9 fadeIn"
          >
            <i className="icon-envelope"></i>Hire me
          </Link>
        </div>
        <div className="text">
          <div class="wrapperDev">
            <svg>
              <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                &lt;Frontend Developer /&gt;
              </text>
            </svg>
          </div>
          <div class="wrapperDev">
            <svg>
              <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                &lt;React.js /&gt;
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div>
        {/* <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span> */}
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
