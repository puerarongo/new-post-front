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
  const { data, message } = consignment;

  return (
    <div className={styles.container}>
      <div className={styles.status__container}>
        {data.TTN && !message ? (
          <div className={styles.container__confirm}>
            <p className={styles.text}>
              <span className={styles.caption}>Delivery status:</span>
              {data.status}
            </p>
            <p className={styles.text}>
              <span className={styles.caption}>Send:</span>
              {data.citySender}. {data.addressSender}
            </p>
            <p className={styles.text}>
              <span className={styles.caption}>Received:</span>
              {data.cityRecipient}. {data.addressReipient}
            </p>
          </div>
        ) : !data.TTN && message ? (
          <div className={styles.container__error}>b</div>
        ) : (
          <div className={styles.container__start}>c</div>
        )}
      </div>
    </div>
  );
};

export default Status;
