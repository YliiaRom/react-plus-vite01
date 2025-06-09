import { useState } from "react";
import bgPremium from "../../assets/img/premium.jpg";
import bgEconom from "../../assets/img/econom.jpg";
import bgAvia from "../../assets/img/avia.jpg";
export const Airplane = () => {
  const [ticket, setTicket] = useState(null);
  const [firstClassProduct, setFirtClassProduct] = useState(null);
  const [menuBisnessClass, setMenuBisnessClass] = useState(false);

  const [snack, setSnack] = useState(false);
  const [listSnackValue, setListSnackValue] = useState(false);
  const [beer, setBeer] = useState(null);
  const [chips, setChips] = useState(null);

  //--сост
  const [selectSnack, setSelectSnack] = useState(null);
  const [selectNewspaper, setSelectNewSpaper] = useState(null);
  const [selectBeer, setSelectBeer] = useState(null);
  const [selectChips, setSelectSChips] = useState(null);

  //---1
  const listSnack = ["Cheese", "prosciutto", "nuts", "chocolate"];
  const listNewspaper = ["Times", "Herald", "Guardian", "Tribune"];
  //-- econom
  const listBeer = ["Lager", "Stout", "Ale", "Pilsner"];
  const listChips = ["Salted", "BBQ", "Cheese", "SourCream"];

  const changeSelectHandler = (e) => {
    const value = e.target.value;
    setTicket(value);

    setSnack(false);
    setListSnackValue(false);
    setMenuBisnessClass(false);
    setBeer(null);
    setChips(null);

    if (value === "bisiness") {
      setBeer(false);
      setChips(false);
      setMenuBisnessClass(true);
    }
    if (value === "econom") {
      setSnack(false);
      setListSnackValue(false);
      setMenuBisnessClass(false);
      setBeer(true);
      setChips(true);
    }
  };

  //--f
  const getTiketValue = () => {
    let value;
    if (ticket === "bisiness") value = `url(${bgPremium})`;
    else if (ticket === "econom") value = `url(${bgEconom})`;
    else value = `url(${bgAvia})`;
    return value;
  };
  const generateList = (list, nameVal, setSelectValue) =>
    list.map((item, index) => (
      <li key={index}>
        <label>
          <input
            type="radio"
            name={nameVal}
            value={item}
            onChange={() => setSelectValue(item)}
          />
          {item}
        </label>
      </li>
    ));
  const getMenu = (value) => {
    if (value === "econom") {
      setSnack(false);
      setListSnackValue(false);
      setBeer(true);
      setChips(true);
    }
  };
  //--bisiness prod
  const productBisinessHandler = (e) => {
    setFirtClassProduct(null);
    setSnack(false);

    const val = e.target.value;
    setFirtClassProduct(val);
  };
  const chekboxSnackHandler = (e) => {
    setSnack(e.target.checked);
    if (e.target.checked === true) setListSnackValue(true);
    else setListSnackValue(false);
  };
  return (
    <>
      <div
        className="sectionWrap"
        // style={{
        //   backgroundImage:
        //     ticket === "bisiness"
        //       ? "url('src/assets/img/premium.jpg')"
        //       : ticket === "econom"
        //       ? "url('src/assets/img/econom.jpg')"
        //       : "url('src/assets/img/avia.jpg')",
        // }}
        style={{ backgroundImage: getTiketValue() }}
      >
        <select name="air" id="air01" onChange={changeSelectHandler}>
          <option value="bisiness">bisiness</option>
          <option value="econom">econom</option>
        </select>
        {menuBisnessClass && (
          <select
            name="first-class"
            value={firstClassProduct}
            id="first"
            onChange={productBisinessHandler}
          >
            <option value="brandy">brandy</option>
            <option value="newspaper">newspaper</option>
          </select>
        )}

        {firstClassProduct === "brandy" && (
          <label>
            Запропонувати закуски
            <input
              type="checkbox"
              checked={snack}
              onChange={chekboxSnackHandler}
            />
          </label>
        )}
        {/* {snack && (
          <ul className="list">
            {listSnack.map((item, index) => {
              return (
                <li key={index}>
                  <label>
                    <input type="radio" name="snack" value={item} />
                    {item}
                  </label>
                </li>
              );
            })}
          </ul>
        )} */}
        {snack && (
          <ul className="list">
            {generateList(listSnack, "snack", setSelectSnack)}
          </ul>
        )}
        {firstClassProduct === "newspaper" && (
          <ul className="list">
            {generateList(listNewspaper, "paper", setSelectNewSpaper)}
          </ul>
        )}

        {beer && (
          <ul className="list">
            {generateList(listBeer, "beer", setSelectBeer)}
          </ul>
        )}
        {chips && (
          <ul className="list">
            {generateList(listChips, "chips", setSelectSChips)}
          </ul>
        )}
        <div className="description">
          <p>
            Задача 2. <br />З випадаючого списку вибираємо клас квитка у літаку.
            <br /> Якщо 1. бізнес - виводимо елементи для вибору газети та
            коньяку (якщо вибрано коньяк, то запропонувати закуску (так/ні)), на
            фоні зображення бізнес кают <br />
            2. економ- виводимо елементи для вибору типу пива і чипсів, на фоні
            хмарки.
          </p>
        </div>
      </div>
    </>
  );
};
