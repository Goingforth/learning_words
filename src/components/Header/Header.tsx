import type { FC } from "react";
import { Link, NavLink } from "react-router-dom";
//import SvgSprite from "../../uikit/SvgSprite/SvgSprite";
import { navigation, connection } from "../../data";
import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navBlock}>
        <Link to='/'>
          {/* <SvgSprite id='logo' width='130px' height='22px' /> */}
        </Link>
        <nav className={styles.navLinks}>
          {navigation.map(({ name, to }, index) => (
            <NavLink
              key={`nav${index}`}
              to={to}
              className={({ isActive }) =>
                [
                  styles.navLink,
                  styles.base_bold,
                  isActive ? styles.active : "",
                ].join(" ")
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className={styles.connection}>
        {/* {connection.map(({ iconID, to, us, data }, index) => ( */}
        {connection.map(({ to, us, data }, index) => (
          <NavLink
            key={`connection${index}`}
            to={to}
            className={styles.connectionItem}
          >
            {/* <SvgSprite id={iconID} width='40px' height='40px' /> */}
            <div>
              <div
                className={[styles.connectionItemUs, styles.small_bold].join(
                  " "
                )}
              >
                {us}
              </div>
              <div
                className={[
                  styles.connectionItemData,
                  styles.large_regular,
                ].join(" ")}
              >
                {data}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </header>
  );
};
