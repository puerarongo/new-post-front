import React from "react";
import styles from "./Loader.module.css";
import { TailSpin } from "react-loader-spinner";

interface ILoader {
  width: number;
  height: number;
}

const Loader: React.FC<ILoader> = ({ width, height }) => {
  return (
    <div className={styles.container}>
      <div className={styles.loader__container}>
        <TailSpin color="rgb(236, 65, 59)" height={width} width={height} />
      </div>
    </div>
  );
};

export default Loader;
