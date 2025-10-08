import { type FC, Suspense } from "react";

import { Outlet } from "react-router-dom";
// import { RingLoader } from "react-spinners";
import { Header } from "../index";

// const Footer = lazy(() => import("../Footer/Footer"));
// const Application = lazy(() => import("../Application/Application"));
import styles from "./Layout.module.scss";
// const Loading = () => (
//   <div className={styles.spinner}>
//     <RingLoader
//       color={"grey"}
//       loading={true}
//       size={400}
//       aria-label='Loading Spinner'
//       data-testid='loader'
//     />
//   </div>
// );

const Layout: FC = () => {
  return (
    // <Suspense fallback={<Loading />}>
    <Suspense fallback={"Loading ..."}>
      <div className={styles.body}>
        <div className={styles.container}>
          <Header />
        </div>
        <main>
          <Suspense fallback={"Loading ..."}>
            <Outlet />
          </Suspense>
        </main>

        {/* {location.pathname !== "/contacts" && <Application />} */}

        {/* <footer className={styles.footer}>
          <Footer />
        </footer> */}
      </div>
    </Suspense>
  );
};
export default Layout;
