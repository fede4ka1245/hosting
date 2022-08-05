import React, {useCallback} from 'react';
import styles from './Buttons.module.css';
import { routes } from "../../routes";
import {useNavigate} from "react-router-dom";

const buttons = [
  {
    label: "Current deals",
    route: routes.currentDeals,
  },
  {
    label: "Navigation on Architecture",
    route: routes.navigationOnArchive,
  },
  {
    label: "Members",
    route: routes.members,
  },
  {
    label: "Ask community",
    route: routes.community,
  },
  {
    label: "How to invest",
    route: routes.invest,
  },
  {
    label: "Help center",
    route: routes.help,
  },
];

const Buttons = () => {
  const navigate = useNavigate()

  const onClick = useCallback((route) => {
    navigate(route);
  }, [navigate])

  return (
    <div>
      <div className={styles.buttons}>
        {buttons.map((el) => (
          <div
            key={el.label}
            onClick={() => onClick(el.route)}
            className={styles.button}
          >
            <div>
              {el.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
