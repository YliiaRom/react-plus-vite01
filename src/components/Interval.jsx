import { useEffect, useState } from "react";
import BoLL from "./BoLL.jsx";

export const Interval = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const intervalNum = setInterval(() => {
      setVisible((prev) => !prev);
    }, 1000);
    return () => clearInterval(intervalNum);
  }, []);
  return (
    <div style={{ width: "10px", height: "10px" }}>
      <div
        style={{
          display: visible ? "block" : "none",
        }}
      >
        <BoLL />
      </div>
    </div>
  );
};
