import { shadow } from "./helpers/shadow.js";

shadow;
function Box() {
  return (
    <>
      <div className="message text3d">
        <h1>
          <span style={{ textShadow: shadow() }}> Задачі </span> <br />№ 2
        </h1>

        <p>
          Використовуються: <br />
          useState()/ onBlur=&#123;&#125;
          <br />
          іноді onChange=&#123;&#125;
        </p>
        <p>
          onBlur = Коли користувач покидає поле вводу <br />
          (натискає на інше місце), <br /> ця функція спрацьовує й оновлює
          результат на екрані.
        </p>
      </div>
    </>
  );
}
export default Box;
