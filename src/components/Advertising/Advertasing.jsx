import { useState } from "react";
import bgAge02 from "../../assets/img/age02.jpg";
import { Interval } from "../Interval";

export const Advertising = () => {
  const [age, setAge] = useState("");
  const [advertising, setAdvertasing] = useState(false);

  const inputHandler = (e) => {
    setAdvertasing(false);
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setAge(value);
      if (value > 18) setAdvertasing(true);
    }
  };
  return (
    <>
      <Interval />
      <div
        className="sectionWrap"
        style={{ backgroundImage: `url(${bgAge02})` }}
      >
        <div className="description">
          <p>
            Задача №10. <br />
            Користувача заходить на сайт і вводить свій вік. Якщо вік більше 18,
            то вивсти текст реклами (інакше нічого не треба робити).
          </p>
        </div>
        <div className="inputBox">
          <label>
            Введіть свій вік
            <input type="number" onBlur={inputHandler} />
          </label>
          {advertising && <p>Тут має бути текст реклами</p>}
        </div>
      </div>
    </>
  );
};
