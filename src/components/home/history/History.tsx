import React from "react";
import styles from "./History.module.css";
import { useSelector, useDispatch } from "react-redux";
import { valueActions } from "../../../redux/slices/valueSlice";
import { historyActions } from "../../../redux/slices/historySlice";

const History: React.FC = () => {
  const dispatch = useDispatch();
  const history = useSelector((state: any) => state.history.history);

  const clickHandler = (e: any) => {
    dispatch(valueActions.valueAdd({ value: e.target.textContent }));
  };

  const buttonHandler = () => {
    dispatch(historyActions.historyDelete());
  };

  return (
    <div className={styles.container}>
      <div className={styles.history__container}>
        <h2 className={styles.title}>History</h2>
        {history.length > 0 ? (
          <>
            <ul className={styles.history__list}>
              {history.map((el: string, index: number) => {
                return (
                  <li className={styles.history__item} key={index}>
                    <p className={styles.item__text} onClick={clickHandler}>
                      {el}
                    </p>
                  </li>
                );
              })}
            </ul>
            <button
              className={styles.button}
              type="button"
              onClick={buttonHandler}
            >
              Clear history
            </button>
          </>
        ) : (
          <div className={styles.no__history}>
            <p className={styles.subtitle}>
              You don't have an consignment viewer history yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
