import { useState } from "react";
import smile from "../assets/img/smile.png";
import bgImg from "../assets/img/login.jpg";
export const Smile = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [smileMarker, setSmileMarker] = useState(false);
  const [error, setError] = useState(false);
  const [colorValue, setColorValue] = useState("red");

  const userLogin = "Yuliia";
  const userPassword = "11111";

  const validateLogin = (e) => {
    setSmileMarker(false);
    setError(false);

    const valueLogin = login.trim();
    if (valueLogin === "") {
      alert(`Login має буті не порожнім рядком`);
      setLogin("");
      return;
    }

    setLogin(valueLogin);

    //-кольор

    if (valueLogin.toLowerCase() === "Іван".toLowerCase()) {
      setColorValue("blue");
    } else {
      setColorValue("red");
    }

    //--login-true/false
    if (valueLogin.toLowerCase() === userLogin.toLowerCase()) {
      setSmileMarker(true);
      setError(false);
      return;
    } else {
      setError(true);
      setSmileMarker(false);
    }
    setLogin("");
    setPassword("");
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    validateLogin();
  };
  return (
    <>
      <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="description">
          <p>
            Задача 1.
            <br /> Вводимо логіна і пароль. Якщо логін вірний відображаємо
            смайл. Якщо ні, то:
            <br /> 1. якщо логін = Іван- колір повідомлення про помилку синій
            <br /> 2. якщо хтось інший, то колір повідомлення червоний
          </p>
        </div>

        <form className="inputBox" onSubmit={handlerSubmit}>
          <label>
            Login{" "}
            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Go</button>
        </form>
        {smileMarker && (
          <div className="message">
            <img src={smile} width="200px" />
          </div>
        )}
        {error && (
          <div className="errorMassege">
            <p style={{ color: colorValue }}>Не вірний login</p>
          </div>
        )}
      </div>
    </>
  );
};
