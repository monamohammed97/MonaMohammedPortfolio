import React from "react";
import TrackVisibility from "react-on-screen";
// import Skill from "../Items/Skill";
import { HiArrowCircleRight } from "react-icons/hi";
const skillData = {
  skillContent:
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics",
  progressData: [
    {
      id: 1,
      name: "HTML/5",
      // percentage: 85,
    },
    {
      id: 2,
      name: "CSS/3",
    },
    {
      id: 3,
      name: "Sass",
    },
    {
      id: 4,
      name: "Bootstrap",
    },
    {
      id: 5,
      name: "JavaScript",
    },
    {
      id: 6,
      name: "jQuery",
    },
    {
      id: 7,
      name: "React.js",
    },
    {
      id: 8,
      name: "API integration",
    },
    {
      id: 9,
      name: "React-redux",
    },
    {
      id: 10,
      name: "Redux-thunk",
    },
    {
      id: 11,
      name: "Redux-saga",
    },
    {
      id: 12,
      name: "Redux-toolkit",
    },
    {
      id: 13,
      name: "React-hooks",
    },
    {
      id: 14,
      name: "React-router",
    },
    {
      id: 15,
      name: "Styled-component",
    },
    {
      id: 16,
      name: "GitHub",
    },
     {
      id: 17,
      name: "Tailwind Css",
    },
  ],
};

function Skills() {
  return (
    <>
      {/* <p className="pb-3">{skillData.skillContent}</p> */}
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-6 col-md-4 col-lg-3" key={progress.id}>
              <TrackVisibility once>
                {/* <Skill progress={progress} /> */}
                <h4 className="float-left mb-2 mb-md-3 mt-0 d-flex align-items-center gap-10 skill">
                  <HiArrowCircleRight />
                  <span className="ms-2">{progress?.name}</span>
                </h4>
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
