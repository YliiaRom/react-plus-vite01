import { useState } from "react";
import styles from "./English.module.css";
import bgImg from "../../assets/img/english.jpg";
import imgTable from "../../assets/img/table.jpg";
export const English = () => {
  const [word, setWord] = useState("");
  const [colorBorder, setColorBorder] = useState("transparent");
  const [okMessage, setOkMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const tableCard = ["стіл", "stil"];

  const changeInputHandler = (e) => {
    setWord(e.target.value.trim().toLowerCase());
    setColorBorder("yellow");
    setOkMessage(false);
    setErrorMessage(false);
  };
  const getBorderColor = (value) => {
    if (value) {
      setColorBorder("green");
      setOkMessage(true);
      setErrorMessage(false);
    } else {
      setColorBorder("red");
      setErrorMessage(true);
      setOkMessage(false);
    }
  };

  const translateHandler = () => {
    const value = tableCard.includes(word);

    getBorderColor(value);
  };
  let contentMessage;
  if (okMessage) contentMessage = <p className="message">Добре молодець</p>;
  if (errorMessage)
    contentMessage = <p className="message">Невірно, спробуй ще</p>;
  return (
    <>
      <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
        <div>
          <p className="description">
            Задача 3.
            <br /> Елемент тренажера англійської.
            <br /> Виводимо зображення елемента і слово. Користувач вводить
            відповідь. Якщо вірно- відтворюємо фразу «Добре. Молодець!» (і
            додаємо зелену рамку до елемента), <br />
            якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» (і
            додаємо червону рамку).
          </p>
        </div>

        <div className={`inputBox ${styles.card}`}>
          <div>
            <img
              className={styles.img}
              style={{
                border: `2px solid ${
                  okMessage
                    ? colorBorder
                    : errorMessage
                    ? colorBorder
                    : "transparent"
                } `,
              }}
              src={imgTable}
              alt="table"
            />
          </div>

          <h2>Table</h2>

          <label>
            Ваш переклад:
            <input type="text" value={word} onChange={changeInputHandler} />
          </label>

          <button onClick={translateHandler}>Перевірити</button>
        </div>
        {/* <div>
          {okMessage && <p className="message">Добре молодець</p>}
          {errorMessage && <p className="message">Невірно, спробуй ще</p>}
        </div> */}
        {contentMessage}
      </div>
    </>
  );
};
