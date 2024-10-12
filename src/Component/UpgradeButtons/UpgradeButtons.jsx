import React, { useState } from "react";

import "./UpgradeButtons.css";

function UpgradeButtons({
  balance,
  costPerTap,
  profitPerTap,
  costPerHour,
  profitPerHour,
  setallBallance,
  moneyPerTap,
  setMonetPerTap,
  setCostPerTap,
  setCostPerHour,
}) {
  const [notEnoughMoneyClick, setNotEnoughMoneyClick] = useState(false);
  const [notEnoughMoneyHour, setNotEnoughMoneyHour] = useState(false);
  const [haveMoneyClick, sethaveMoneyClick] = useState(false);
  const [haveMoneyHour, sethaveMoneyHour] = useState(false);
  const [tapIsClicked, setTapIsClicked] = useState(false);
  const [hourIsClicked, setHourIsClicked] = useState(false);
  const isEnough = (
    notEnoughWhat,
    perWhat,
    costPerWhat,
    profitPerWhat,
    haveMoneyWhat,
  ) => {
    if (notEnoughWhat) {
      return (
        <p style={{ color: "white", letterSpacing: "0.5rem" }}>
          Not enough money
        </p>
      );
    } else if (balance >= costPerWhat && haveMoneyWhat) {
      return (
        <p style={{ fontSize: "40px", color: "rgb(95, 252, 176)" }}>Buyed!</p>
      );
    } else {
      return (
        <>
          <p>Profit Per {perWhat ? "hour" : "click"}</p>
          <p>+ {profitPerWhat}$</p>
          <p style={{ fontSize: "10px" }}>cost: {costPerWhat}$</p>
        </>
      );
    }
  };

  const handleClickProfit = () => {
    setTapIsClicked(true);
    if (balance < costPerTap) {
      setNotEnoughMoneyClick(true);
      setTimeout(() => setNotEnoughMoneyClick(false), 2500);
    } else {
      sethaveMoneyClick(true);

      setTimeout(() => sethaveMoneyClick(false), 2500);
      setallBallance(balance - costPerTap);
      setMonetPerTap(moneyPerTap + profitPerTap);
      setCostPerTap(costPerTap * 2.5);
    }
    setTapIsClicked(false);
  };

  const handleHourProfit = () => {
    setHourIsClicked(true);
    if (balance < costPerHour) {
      setNotEnoughMoneyHour(true);
      setTimeout(() => setNotEnoughMoneyHour(false), 2500);
    } else {
      sethaveMoneyHour(true);
      setTimeout(() => sethaveMoneyHour(false), 2500);
      setallBallance(balance - costPerHour);
      setCostPerHour(costPerHour * 1.8);
    }
    setHourIsClicked(false);
  };

  return (
    <div className="ProfitPer d-flex justify-content-between align-items-center mt-3">
      <button onClick={handleClickProfit}>
        {isEnough(
          notEnoughMoneyClick,
          "",
          costPerTap,
          profitPerTap,
          haveMoneyClick,
        )}
      </button>
      <button onClick={handleHourProfit}>
        {isEnough(
          notEnoughMoneyHour,
          "h",
          costPerHour,
          profitPerHour,
          haveMoneyHour,
        )}
      </button>
    </div>
  );
}

export default UpgradeButtons;
