import { useState } from "react";
import { ContentImgOrErrorWithAge } from "../ContentImgOrErrorWithAge";
import sale from "../../assets/img/product.png";
import bgImg from "../../assets/img/b01.jpg";
export const Age = () => {
  const [age, setAge] = useState(null);
  // const [product, setProduct] = useState(false);

  const changeHandler = (e) => {
    // setProduct(false);
    const value = parseInt(e.target.value.trim());
    if (!isNaN(value)) setAge(value);
    //--------var1
    // if (value > 16) {
    //   setProduct(true);
    // } else {
    //   setProduct(false);
    // }
  };

  //--------var2 =>let
  // let content;
  // if (age < 16) content = <h2>Заборонено</h2>;
  // if (age >= 16)
  //   content = (
  //     <img src="src/assets/img/product.png" width="200px" alt="product" />
  //   );

  return (
    <>
      <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
        <div>
          <p className="description">
            Задача 9. <br /> Користувача заходить на сайт і вводить свій вік.
            Якщо вік менше 16, то вивсти повідомлення про заборону користування
            сайтом, інакше вивести зображення товару.
          </p>
        </div>
        <div className="inputBox">
          <label>
            введіть свій вік.
            <input type="number" onBlur={changeHandler} />
          </label>
          <p>
            Використовується onBlur! — щоб побачити реакцію, треба спочатку
            ввести данні, а потім клікнути або перемістити фокус в інше місце.
          </p>
        </div>
        {/* {age < 16 ? (
          <h2>Заборонено</h2>
        ) : (
          <img src={sale} alt="product" />
        )} */}

        {/* {content} */}
        <ContentImgOrErrorWithAge age={age} srcValue={sale} />
      </div>
    </>
  );
};
