import React from "react";
import styles from "./BusinessList.module.css";
import Business from "../Business/Business";

const BusinessList = ({businesses}) => {
  return (
    <div className={styles.BusinessList}>
      {businesses.map((business, index) => {
        return <Business key = {index} business = {business} />
      })}
    </div>
  );
};

export default BusinessList;
