import React from "react";

function Skill({ progress: { name, percentage }, isVisible }) {
  console.log("🚀 ~ file: Skill.jsx:4 ~ Skill ~ isVisible:", isVisible);
  const winWidth = window.innerWidth;

  const progressQuery = () => {
    if (winWidth && winWidth > 767) {
      return (
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={percentage}
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      );
    }
    return (
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={percentage}
        style={{
          width: `${percentage}%`,
        }}
      ></div>
    );
  };

  return (
    <h4 className="float-left mb-3 mt-0">{name}</h4>

    // <div className="skill-item">

    //   <div className="skill-info clearfix">
    //     {/* <span className="float-right">{percentage}%</span> */}
    //   </div>
    //   {/* <div className="progress">{progressQuery()}</div> */}
    // </div>
  );
}

export default Skill;
