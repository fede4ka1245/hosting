import React, {useCallback} from 'react';
import styles from './CurrentDeals.module.css';
import { deals } from "./deals";
import {useNavigate} from "react-router-dom";

const CurrentDeals = () => {
  const navigate = useNavigate()

  const onDealClick = useCallback((route) => {
    if (!route) {
      return;
    }

    navigate(route);
  }, [navigate])

  return (
    <>
      <div className={styles.deals}>
        {deals.map((deal, index) => (
          <img alt={index} key={index} className={styles.deal} src={deal.path} onClick={() => onDealClick(deal.route)}/>
        ))}
      </div>
    </>
  );
};

export default CurrentDeals;
