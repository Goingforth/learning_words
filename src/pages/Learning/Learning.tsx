import { type FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./Learning.module.scss";

const methods = [
  { id: "method1", name: "Cards", to: "/learning/cards" },
  { id: "method2", name: "Clear glossary", to: "/learning/clear_glossary" },
  { id: "method3", name: "View glossary", to: "/learning/view_glossary" },
];

const Learning: FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <nav className={styles.methods}>
          {methods.map(({ id, name, to }) => (
            <NavLink key={id} className={styles.itemMethod} to={to}>
              {name}
            </NavLink>
          ))}
        </nav>
      </div>
      <Suspense fallback={"Loading ..."}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Learning;
