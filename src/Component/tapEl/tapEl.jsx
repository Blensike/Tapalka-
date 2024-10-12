import React from "react";

function TapEl({ onClick }) {
  return (
    <div className="circle m-auto mt-3">
      <button onClick={onClick}>
        <div className="tapElement"></div>
      </button>
    </div>
  );
}

export default TapEl;
