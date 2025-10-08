//import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components";
import {
  ClearGlossary,
  Glossary,
  NewGlossary,
  ViewGlossary,
  Learning,
  Cards,
} from "../pages";

// const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
// const AvailablePositions = lazy(
//   () => import("../pages/AvailablePositions/AvailablePositions")
// );
// const Contacts = lazy(() => import("../pages/Contacts/Contacts"));
// const Formdata = lazy(() => import("../pages/Formdata/Formdata"));
// const Home = lazy(() => import("../pages/Home/Home"));
// const InteriorDesign = lazy(
//   () => import("../pages/InteriorDesign/InteriorDesign")
// );
// const News = lazy(() => import("../pages/News/News"));
// const Services = lazy(() => import("../pages/Services/Services"));
// const Work = lazy(() => import("../pages/Work/Work"));
// const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));
// const ModernCottage = lazy(
//   () => import("../pages/ModernCottage/ModernCottage")
// );
// const NewsPage = lazy(() => import("../pages/News/NewsPages/NewsPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "glossary",
        element: <Glossary />,
        children: [
          {
            path: "clear_glossary",
            element: <ClearGlossary />,
          },
          {
            path: "new_glossary",
            element: <NewGlossary />,
          },
          {
            path: "view_glossary",
            element: <ViewGlossary />,
          },
        ],
      },
      {
        path: "learning",
        element: <Learning />,
        children: [
          {
            path: "cards",
            element: <Cards />,
          },
        ],
      },
    ],
    //   {
    //     path: "/",
    //     element: <Home />,
    //   },
    // {
    //   path: "about_us",
    //   children: [
    //     { element: <AboutUs />, index: true },
    //     {
    //       path: "available_positions",
    //       element: <AvailablePositions />,
    //     },
    //   ],
    // },
    // {
    //   path: "services",
    //   children: [
    //     { element: <Services />, index: true },
    //     {
    //       path: "interior_design",
    //       element: <InteriorDesign />,
    //     },
    //   ],
    // },

    // {
    //   path: "work",
    //   children: [
    //     { element: <Work />, index: true },
    //     {
    //       path: "modern_cottage",
    //       element: <ModernCottage />,
    //     },
    //   ],
    // },
    // {
    //   path: "news",
    //   children: [
    //     { element: <News />, index: true },
    //     {
    //       path: ":id",
    //       element: <NewsPage />,
    //     },
    //   ],
    // },

    // {
    //   path: "contacts",
    //   element: <Contacts />,
    // },
    // {
    //   path: "formdata",
    //   element: <Formdata />,
    // },
    //  ],
  },
]);
