import { type FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

import styles from "./Glossary.module.scss";
import { NavLink } from "react-router-dom";

const methods = [
  { id: "method1", name: "Create new glossary", to: "/glossary/new_glossary" },
  { id: "method2", name: "Clear glossary", to: "/glossary/clear_glossary" },
  { id: "method3", name: "View glossary", to: "/glossary/view_glossary" },
];

const Dictionary: FC = () => {
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

export default Dictionary;
