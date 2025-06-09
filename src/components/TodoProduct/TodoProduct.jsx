import { useState } from "react";
import bgImg from "../../assets/img/tomato.jpg";
export const TodoProduct = () => {
  const [productObj, setProductObj] = useState(() => []);
  const [productName, setProductName] = useState("");
  const [list, setList] = useState(null);

  const createProduct = () => {
    setProductObj((prevProduct) => [
      ...prevProduct,
      {
        id: new Date().getTime(),
        name: productName,
      },
    ]);
  };
  const getItems = () => {
    const value = (
      <ul className="select">
        {productObj.map((el) => {
          return <li key={el.id}>{el.name}</li>;
        })}
      </ul>
    );
    setList(value);
  };
  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div>
        <p className="description">
          Приклад 12.
          <br /> Розробити список покупок. Корстувач у формі поступово додає
          назву товару і кількість і товари поступово додаються у список
          покупок.
        </p>
      </div>
      <div className="inputBox">
        <label>
          Введіть назву продукта:{" "}
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <button onClick={createProduct}>add Product</button>
        <button onClick={getItems}>render Products</button>
        {productObj.length > 0 && list}
      </div>
    </div>
  );
};
