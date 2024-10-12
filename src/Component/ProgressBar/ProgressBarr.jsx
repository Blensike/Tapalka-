import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({
  currentProgress,
  maxProgress,
  nextLevel,
  previousLevel,
}) => {
  // Рассчитываем процент прогресса
  const progressPercentage = (currentProgress / maxProgress) * 100;
  let display = ["none", "flex"];

  if (progressPercentage === 0) {
  }
  return (
    <div className="d-flex justify-content-between ">
      <span id="previouslevel" className="position-absolute">
        <span id="prevText">LVL</span>
        {previousLevel}
      </span>

      <div className="progress-container mt-5">
        {/* Шкала заполнения */}
        <div
          className="progress-bar"
          style={{ width: `${progressPercentage}%` }}
        >
          <div
            className="progress-circle"
            style={{
              display: `${progressPercentage === 0 ? display[0] : display[1]}`,
            }}
          >
            <span>{Math.round(progressPercentage)}%</span>
          </div>
        </div>
      </div>

      <span
        id="nextLevel"
        className="position-absolute"
        style={{ right: "30px" }}
      >
        <span id="nextText">LVL</span>
        {nextLevel}
      </span>
    </div>
  );
};

export default ProgressBar;
