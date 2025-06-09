import { useState } from "react";
import bgImg from "../assets/img/car.jpg";
export const CarsList = ({ cars }) => {
  const [list, setList] = useState(null);
  const handlerCars = () => {
    const value = (
      <ol className="select">
        {cars.map((car) => {
          return (
            <li key={car.id}>{`${car.brand}/${car.model} -${car.year}`}</li>
          );
        })}
      </ol>
    );
    setList(value);
  };
  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p>
          Задача №11.
          <br /> Дано масив з авто. Відобразити його. const cars = [ &#123; id:
          1, brand: "Toyota", model: "Corolla", year: 2020 &#125;
          <br />, &#123; id: 2, brand: "Honda", model: "Civic", year: 2019
          &#125;
          <br />, &#123; id: 3, brand: "Tesla", model: "Model 3", year: 2022
          &#125;
          <br />, &#123; id: 4, brand: "Ford", model: "Focus", year: 2018 &#125;
          <br />, &#123; id: 5, brand: "BMW", model: "X5", year: 2021 &#125;
          <br />, ]
        </p>
      </div>
      <button onClick={handlerCars}>Render Object</button>
      {list}
    </div>
  );
};
