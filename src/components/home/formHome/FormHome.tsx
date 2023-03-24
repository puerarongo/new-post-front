import React, { useState, useEffect } from "react";
import styles from "./FormHome.module.css";
import Button from "../../button/Button";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { debounce } from "lodash";

// * work with redux
import { useDispatch, useSelector } from "react-redux";
import { getConsignmentData } from "../../../redux/operation/consignment-operation";

const FormHome: React.FC = () => {
  const [TTN, setTTN] = useState<any>("");
  const value = useSelector((state: any) => state).value.value;
  const dispatch = useDispatch();

  useEffect(() => {
    if (value) {
      setTTN(value);
      dispatch(getConsignmentData({ TTN: value }));
    }
  }, [value, dispatch]);

  const handleChange = (e: any) => setTTN(e.target.value);

  const debounceChange = debounce(handleChange, 200);

  const handleSubmit = (e?: any) => {
    e.preventDefault();
    if (TTN.length === 14 && !isNaN(Number(TTN))) {
      dispatch(getConsignmentData({ TTN }));
    } else {
      Notify.failure("Помилка! Поле має бути 14-значним числом");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.label}>Введіть номер ТТН:</p>
        <input
          className={styles.input}
          type="text"
          placeholder="14 символів..."
          onChange={debounceChange}
        />
        <Button text={"Отримати статус ТТН"} type={"submit"} />
      </form>
    </div>
  );
};

export default FormHome;
