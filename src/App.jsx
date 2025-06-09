// import { useState } from "react";
import Box from "./components/Box";

import "./App.css";
import { NumberColor } from "./components/NumberColor";
import { Smile } from "./components/Smile";
import { Battery } from "./components/Battery/Battery";
import { Airplane } from "./components/Airplane/Airplane";
import { Age } from "./components/Age/Age";
import { English } from "./components/English/English";
import { Advertising } from "./components/Advertising/Advertasing";
import { Interval } from "./components/Interval";
import { ListObject } from "./components/ListObject/ListObject";
import { RandomNumber } from "./components/RandomNumber";
import { CarsList } from "./components/CarsList";
import { cars } from "./components/coll/cars.js";
import { workersList2 } from "./components/coll/wokers.js";
import { TodoProduct } from "./components/TodoProduct/TodoProduct.jsx";
import { Vitamin } from "./components/Vitamins/Vitamins.jsx";
import { Kitchen } from "./components/Kitchen/Kitchen.jsx";

function App() {
  return (
    <>
      <Box />

      <Smile />
      <Airplane />
      <English />
      <ListObject workersList2={workersList2} />
      <Vitamin />
      <Kitchen />
      <NumberColor />
      <Battery />
      <hr />
      <Age />
      <Advertising />
      <Interval />
      <RandomNumber />
      <CarsList cars={cars} />
      <TodoProduct />
    </>
  );
}

export default App;
