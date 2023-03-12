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
              <span className={styles.caption}>Статус доставки:</span>
              {data.status}
            </p>
            <p className={styles.text}>
              <span className={styles.caption}>Відправлено:</span>
              {data.citySender}. {data.addressSender}
            </p>
            <p className={styles.text}>
              <span className={styles.caption}>Отримано:</span>
              {data.cityRecipient}. {data.addressReipient}
            </p>
          </div>
        ) : !data.TTN && message ? (
          <div className={styles.start__container}>
            <h2 className={styles.title}>{message}</h2>
          </div>
        ) : (
          <div className={styles.start__container}>
            <h2 className={styles.title}>
              Введіть номер вантажу в форму для отримання інформації
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Status;
