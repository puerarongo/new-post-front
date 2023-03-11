import React from "react";
import styles from "./Departments.module.css";
import FormDepartments from "./formDepartments/FormDepartments";
import { useSelector } from "react-redux";
import DepartmentsItem from "./departmentsItem/DepartmentsItem";
import IDataDepartments from "../../helpers/interface/dataDepartments.interface";

const Departments: React.FC = () => {
  const place = useSelector((state: any) => state.place);
  console.log(place);

  return (
    <div className={styles.container}>
      <FormDepartments />
      <div className={styles.container__result}>
        <div className={styles.container__into}>
          {place.city && !place.message ? (
            <ul className={styles.list}>
              {place.departments.length > 0 ? (
                place.departments.map(
                  ({ address, description, siteKey }: IDataDepartments) => {
                    return (
                      <DepartmentsItem
                        key={siteKey}
                        address={address}
                        description={description}
                      />
                    );
                  }
                )
              ) : (
                <li>
                  <h2>There are no departments available in this city!</h2>
                </li>
              )}
            </ul>
          ) : !place.city && place.message ? (
            <div className={styles.start__container}>
              <h2 className={styles.title}>{place.message}</h2>
            </div>
          ) : (
            <div className={styles.start__container}>
              <h2 className={styles.title}>
                Enter name of the city to see the working departments of Nova
                Poshta in this city!
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Departments;
