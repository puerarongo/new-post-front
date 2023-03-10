import React from "react";
import styles from "./Status.module.css";
import IDataConsignment from "../../../helpers/interface/dataConsignment.interface";

interface IConsignment {
  consignment: {
    data: IDataConsignment;
    message: string;
  };
}

const Status: React.FC<IConsignment> = ({ consignment }) => {
  return (
    <div className={styles.container}>
      <div className={styles.status__container}>
        {consignment.data.TTN && !consignment.message ? (
          <div>a</div>
        ) : !consignment.data.TTN && consignment.message ? (
          <div>b</div>
        ) : (
          <div>c</div>
        )}
      </div>
    </div>
  );
};

export default Status;
