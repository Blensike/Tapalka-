import React, { useState, useEffect } from "react";
import TapEl from "../tapEl/tapEl"; // Импорт компонента TapEl
import Score from "../Score/Score";
import MyNavbar from "../Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProgressBar.css";
import ProgressBar from "../ProgressBar/ProgressBarr"; // Прогресс-бар
import UpgradeButtons from "../UpgradeButtons/UpgradeButtons";

const ClickerGame = () => {
  const [valBtn, setValBtn] = useState(0); // Прогресс для кнопки (визуальный процент)
  const [allBallance, setallBallance] = useState(0); // Общее количество кликов (опыт)
  const [moneyPerTap, setMoneyPerTap] = useState(1);
  const [level, setLevel] = useState(1); // Уровень
  const [clicksForNextLevel, setClicksForNextLevel] = useState(100); // Количество кликов для следующего уровня
  const [energy, setEnergy] = useState(1500); // Текущая энергия
  const [maxEnergy, setMaxEnergy] = useState(1500); // Максимальная энергия
  const [extraClicks, setExtraClicks] = useState(allBallance);

  const [costPerHour, setCostPerHour] = useState(10);
  const [profitPerHour, setProfitPerHour] = useState(5);
  const [costPerTap, setCostPerTap] = useState(20);
  const [profitPerTap, setProfitPerTap] = useState(1);
  useEffect(() => {
    if (energy !== maxEnergy) {
      const interval = setInterval(() => {
        setEnergy((prevEn) => prevEn + 1);
      }, 30000);

      // Очищаем таймер при изменении зависимостей или размонтировании
      return () => clearInterval(interval);
    }
  }, [energy, maxEnergy]); // Добавляем зависимости

  function handleClick() {
    const newallBallance = allBallance + moneyPerTap;
    setallBallance(newallBallance); // Обновляем количество кликов
    setEnergy(energy - 1); // Уменьшаем энергию
    setExtraClicks(newallBallance);

    // Рассчитываем процент прогресса
    const newProgress = (newallBallance / clicksForNextLevel) * 100;

    if (newallBallance >= clicksForNextLevel && energy <= maxEnergy) {
      setLevel(level + 1); // Повышаем уровень
      setMaxEnergy(maxEnergy + 500);
      setExtraClicks(newallBallance - clicksForNextLevel); // Избыточные клики
      //   setallBallance(extraClicks); // Оставляем избыточные клики для следующего уровня
      setValBtn(0); // Сбрасываем прогресс
      setClicksForNextLevel(clicksForNextLevel * 2); // Увеличиваем требуемые клики
    } else {
      setValBtn(newProgress); // Обновляем про гресс
    }
  }

  return (
    <div className="d-flex justify-content-center flex-column align-item-center">
      {/* Навбар с отображением энергии */}
      <MyNavbar energy={energy} maxEnergy={maxEnergy} />

      {/* Счетчик уровня и опыта */}
      <Score allBalance={extraClicks} level={level} />

      {/* Элемент для клика */}
      <TapEl onClick={handleClick} />

      {/* Прогресс-бар, показывающий текущее заполнение */}
      <ProgressBar
        currentProgress={extraClicks}
        maxProgress={clicksForNextLevel}
        nextLevel={level}
        previousLevel={level - 1}
      />
      <UpgradeButtons
        balance={allBallance}
        costPerTap={costPerTap}
        profitPerTap={profitPerTap}
        costPerHour={costPerHour}
        profitPerHour={profitPerHour}
        setallBallance={setallBallance}
        moneyPerTap={moneyPerTap}
        setMonetPerTap={setMoneyPerTap}
        setCostPerHour={setCostPerHour}
        setCostPerTap={setCostPerTap}
      />
    </div>
  );
};

export default ClickerGame;
