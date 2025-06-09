import { useState } from "react";
import styles from "./Battery.module.css";
import bgImg from "../../assets/img/battery.jpg";
export const Battery = () => {
  const [percent, setPercent] = useState(50);

  // const blurHandler = (e) => {
  //   const val = e.target.value;

  //   if (val === "") {
  //     setPercent("");
  //     return;
  //   }

  //   const value = parseInt(val, 10);
  //   if (val < 0 || val > 100) {
  //     alert(`число має бути більше 0 і менше 100`);
  //     setPercent("");
  //     return;
  //   }
  //   if (!isNaN(value)) setPercent(value);
  // };

  const changeHandler = (e) => {
    const val = parseInt(e.target.value);
    if (val === "") {
      setPercent("");
      return;
    }
    if (val < 0 || val > 100) {
      alert(`чісло мае бути більше 0 і менше 100 !`);
      setPercent("");
      return;
    }
    if (!isNaN(val)) setPercent(val);
  };
  let color;
  if (percent > 80) color = "green";
  else if (percent >= 30) color = "yellow";
  else color = "red";

  // const getStyleColor = () => {
  //   let color;
  //   if (percent > 80) color = styles.full;
  //   else if (percent >= 30) color = styles.medium;
  //   else color = styles.low;
  //   return color;
  // };
  return (
    <>
      <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="description">
          <p>
            Задача 8. <br /> У залежності від заряду батареї застосовувати{" "}
            <br />
            відповідний колір фону Заряд &gt; 80- зелений <br />
            30 &lt; = Заряд &lt; = 80 - жовтий
            <br />
            Заряд &gt; 30- червоний
          </p>
        </div>
        <div className="inputBox">
          <label>
            Заряд батареї
            <input
              // className={getStyleColor()}
              type="number"
              onBlur={changeHandler}
              // style={{
              //   backgroundColor:
              //     percent > 80 ? "green" : percent >= 30 ? "yellow" : "red",
              // }}
              style={{
                backgroundColor: color,
              }}
            />
          </label>
        </div>
      </div>
    </>
  );
};
