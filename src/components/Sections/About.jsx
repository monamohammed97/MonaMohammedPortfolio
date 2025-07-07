import React from "react";
import { Link as ScrollLink } from "react-scroll";

const aboutData = {
  cvpath: "media/Frontend_Dev_Mona_Shaban.CV.pdf",
  image: "images/image.PNG",
  name: "Mona Mohammed",
  location: "Palestine, Gaza",
  birthday: "30 Dec, 1997",
  email: "mona.moahmmed.shaban@gmail.com",
  aboutMe: `I am a front-end developer with an excellent experience in the field.`,
  aboutMe1: ` I am always passionate about learning and undertaking new challenges, constantly evolving, and enjoying dealing with problems and solving them.
  .`,
  aboutMe2: ` I am always passionate about learning and undertaking new challenges, constantly evolving, and enjoying dealing with problems and solving them.`,
};

function About() {
  return (
    <div className="row">
      <div className="col-6 col-md-3 fadeIn delay">
        <img src={aboutData.image} alt={aboutData.name} className="image" />
      </div>
      <div className="col-md-9">
        <h2 className="mt-4 mt-md-0 mb-4 fadeIn delay">Hello,</h2>
        <p className="mb-0 fadeIn delay_1">{aboutData.aboutMe}</p>
        <p className="mb-0 fadeIn delay_3">{aboutData.aboutMe1}</p>
        <p className="mb-0 fadeIn delay_5">{aboutData.aboutMe2}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2 fadeIn delay_7">
              Name: <span className="text-dark">{aboutData.name}</span>
            </p>
            <p className="mb-0 fadeIn delay_9">
              Birthday: <span className="text-dark">{aboutData.birthday}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2 fadeIn delay_7">
              Location: <span className="text-dark">{aboutData.location}</span>
            </p>
            <p className="mb-0 fadeIn delay_9">
              Email: <span className="text-dark">{aboutData.email}</span>
            </p>
          </div>
        </div>
        <a href={aboutData.cvpath} className="btn btn-default mr-3 fadeIn delay_2s">
          <i className="icon-cloud-download"></i>Download CV
        </a>
        {/* <ScrollLink
          activeClass="active"
          to={{
            pathname: "mailto:mona00mona1997@gmail.com",
          }}
          spy={true}
          smooth={true}
          duration={500}
          target="_blank"
          offset={50}
          className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
        >
          <i className="icon-envelope"></i>Hire me
        </ScrollLink> */}
      </div>
    </div>
  );
}

export default About;
