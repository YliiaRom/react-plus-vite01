import { useState } from "react";
import bgImg from "../../assets/img/woker.jpg";
export const ListObject = ({ workersList2 }) => {
  const [list, setList] = useState(null);
  const handlerList = () => {
    const value = (
      <ol className="select">
        {workersList2.map((woker) => {
          return <li key={woker.id}>{`${woker.name}: ${woker.salary}`}</li>;
        })}
      </ol>
    );
    setList(value);
  };
  return (
    <>
      <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="description">
          <p>
            Задача 4.
            <br />
            Вивести список як маркований список з елементами у форматі <br />
            (name: salary)
          </p>
        </div>
        <button onClick={handlerList}>render List</button>
        {list}
      </div>
    </>
  );
};
