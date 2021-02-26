import React, { useEffect, useState } from "react";
import styles from "./TrainLine.module.less";
import trainIcon from "@/assets/railway/train.png";
const temp = [
  { left: "1123px", top: "298px" },
  { left: "1260px", top: "470px" },
  { left: "1137px", top: "544px" },
  { left: "1267px", top: "578px" },
  { left: "500px", top: "325px" },
];
const TrainLine = () => {
  const [position, setPosition] = useState({ left: null, top: null });
  useEffect(() => {
    document.onclick = function (event) {
      setPosition({
        left: event.clientX,
        top: event.clientY,
      });
      console.log({
        left: event.clientX,
        top: event.clientY,
      });
    };
  }, []);
  return (
    <div className={styles.trainLine}>
      {temp.map((position, index) => (
        <img key={index} src={trainIcon} alt="train" style={{ ...position }} />
      ))}
      <img src={trainIcon} alt="train" style={{ ...position }} />
    </div>
  );
};
export default TrainLine;
