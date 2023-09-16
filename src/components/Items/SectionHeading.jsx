import React from "react";

function SectionHeading({ title }) {
  return (
    <>
      <h3 className="section-title fadeIn">{title}</h3>
      <div className="spacer" data-height="80"></div>
    </>
  );
}

export default SectionHeading;
