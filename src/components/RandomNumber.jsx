import { useState } from "react";
import bgImg from "../assets/img/random-number.jpg";
export const RandomNumber = () => {
  const [list, setList] = useState([]);
  const clickHandler = () => {
    const newList = Array.from({ length: 5 }, () => Math.random() * 100);
    setList(newList);
  };
  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p>
          Задача №10 <br /> Потрібно відобразити список з N випадкових чисел
        </p>
        <p>
          Формула: <br />
          Array.from( &#123; length: 5 &#125;, () = &gt; Math.random() * 100)
        </p>
      </div>
      {
        <ul className="select" style={{ backgroundColor: "#fff" }}>
          {list.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
        </ul>
      }
      <button onClick={clickHandler}>Random number</button>
    </div>
  );
};
