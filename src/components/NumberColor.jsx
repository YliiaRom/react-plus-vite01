import { useState } from "react";
import bgImg from "../assets/img/ticket.jpg";
export const NumberColor = () => {
  const [place, setPlace] = useState("");
  function changeHandler(e) {
    const value = e.target.value;
    if (value === "") {
      setPlace("");
      return;
    }
    const val = parseInt(value, 10);
    if (val > 10) {
      alert("Чісло має бути  не більше 10");
      return;
    }
    if (!isNaN(val)) setPlace(val);
  }
  return (
    <>
      <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
        <p className="description">
          Задача 7: Приклад. Вводиться номер місця пацієнта у черзі..
          Відображати кольром: зелений - він у трійці перших жовтий- інакше
        </p>
        <div className="inputBox">
          <label>
            ВВедіть номер місця пацієнта у черзі
            <input
              style={{
                backgroundColor: place <= 3 ? "green" : "yellow",
              }}
              min={1}
              type="number"
              value={place}
              onChange={changeHandler}
            />
          </label>
        </div>
      </div>
    </>
  );
};
