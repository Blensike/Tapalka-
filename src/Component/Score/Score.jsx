import React from "react";
import TapEl from "../tapEl/tapEl";
function Score({ allBalance }) {
  return (
    <div className="d-flex flex-column justify-content-center  scoreNum mt-5 mx-auto fs-1 ">
      <div className="score mt-5 m-auto fs-1">{Math.floor(allBalance)}$</div>
      <p className="scoreText text-center mb-4 mt-3">
        To achieve better results, upgrade your auto loot.
      </p>
    </div>
  );
}

export default Score;
