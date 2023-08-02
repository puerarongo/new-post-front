import React from "react";
import IDataConsignment from "../../../helpers/interface/dataConsignment.interface";
import Loader from "../../loader/Loader";
import styles from "./Status.module.css";

interface IConsignment {
  consignment: {
    data: IDataConsignment;
    message: string;
    loading: boolean;
  };
}

const Status: React.FC<IConsignment> = ({ consignment }) => {
  const { data, message, loading } = consignment;

  return (
    <div className={styles.container}>
      <div className={styles.status__container}>
        {loading ? (
          <div className={styles.start__container}>
            <Loader width={100} height={100} />
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Status;
