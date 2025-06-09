import { useState } from "react";
import styles from "./Kitchen.module.css";
import bgImg from "../../assets/img/kitchen.jpg";
export const Kitchen = () => {
  const [order, setOrder] = useState("");
  const [orderList, setOrderList] = useState(() => []);
  const [prepare, setPrepare] = useState([]);
  const [readList, setReadList] = useState([]);

  //-order --> list
  const createOrder = () => {
    if (order.trim() === "") {
      alert(
        `відправили в заказ пусте поле, Заповніть заказом будьласка заказ!`
      );
      return;
    }

    setOrderList((prev) => [
      ...prev,
      {
        id: new Date().getTime(),
        orderName: order,
      },
    ]);
  };

  const deleteInCreateOrder = (item) => {
    setPrepare((prev) => [...prev, item]);
    setOrderList(orderList.filter((el) => el.id !== item.id));
  };
  const deleteInPrepare = (item) => {
    setReadList((prev) => [...prev, item]);
    setPrepare(prepare.filter((el) => el.id !== item.id));
  };
  const read = (item) => {
    setReadList(readList.filter((el) => el.id !== item.id));
  };
  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p>
          Задача 6.
          <br /> На кухню поступають замовлення. Спочатку ми додаємо їх у список
          'Очікують на виконання',
          <br /> якщо повар береться робити — замовлення переходить у список
          'Виконуються,
          <br /> якщо замовлення виконано — переходить у список 'Готові до
          виносу'.
          <br /> Якщо натиснути на 'Подано - страва зникає з таблиці
        </p>
      </div>

      <div className="inputBox">
        <label>
          Нова замовленна страва:{" "}
          <input type="text" onChange={(e) => setOrder(e.target.value)} />
        </label>
        <button onClick={createOrder}>Додати замовлення</button>
      </div>

      {orderList.length > 0 && (
        <div className={styles.menuBox}>
          <h2>Очікують виконання</h2>
          <ul className="select">
            {orderList.map((item) => {
              return (
                <li key={item.id}>
                  {item.orderName}
                  <button onClick={() => deleteInCreateOrder(item)}>
                    Готувати
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {prepare.length > 0 && (
        <div className={styles.menuBox}>
          <h2>Виконуються</h2>
          <ul className="select">
            {prepare.map((item) => {
              return (
                <li key={item.id}>
                  {item.orderName}
                  <button onClick={() => deleteInPrepare(item)}>
                    Приготовлено
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {readList.length > 0 && (
        <div className={styles.menuBox}>
          <h2>Готові до виносу</h2>
          <ul className="select">
            {readList.map((item) => {
              return (
                <li key={item.id}>
                  {item.orderName}
                  <button onClick={() => read(item)}>Продано</button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
