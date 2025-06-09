import { useState } from "react";
import bgImg from "../../assets/img/vitamin.jpg";
export const Vitamin = () => {
  const [listVitamins, setListVitamins] = useState(() => []);
  const [listForRender, setListForRender] = useState([]);
  const [fruitValue, setFruitValue] = useState("");
  const [vitaminValue, setVitaminValue] = useState("");
  const [showList, setShowList] = useState(false);

  const createObject = () => {
    setShowList(false);
    setListVitamins((prev) => [
      ...prev,
      {
        id: new Date().getTime(),
        fruit: fruitValue || "not value",
        vitamin: vitaminValue || "not value",
      },
    ]);
    setFruitValue("");
    setVitaminValue("");
  };

  const createList = () => {
    const value = (
      <ul className="select">
        {listVitamins.map((item) => {
          return <li key={item.id}>{`${item.fruit} -${item.vitamin}`}</li>;
        })}
      </ul>
    );
    setListForRender(value);
    setShowList(true);
  };
  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="inputBox">
        <label>
          Введить назву фрукта:
          <input
            type="text"
            value={fruitValue}
            onChange={(e) => setFruitValue(e.target.value)}
          />
          <label>
            Введіть Вітамін у фрукті:
            <input
              type="text"
              value={vitaminValue}
              onChange={(e) => setVitaminValue(e.target.value)}
            />
          </label>
        </label>
        <button onClick={createObject}>create element</button>
        <button onClick={createList}> render List</button>
        {showList && listForRender}
      </div>
    </div>
  );
};
