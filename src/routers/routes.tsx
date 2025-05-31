import { RouteObject, useRoutes,Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Overview from "../pages/Overview";
import Info from "../pages/Info";
import ScrollToTop from "../components/ScrollToTop";
import { SharedLayout } from "../components/layout/SharedLayout";

export function AppRoutes() {
  const routes: RouteObject[] = [
    {
      path: "/",  
      // Home page WITHOUT Header & Footer
      element: <Home />,  
      index: true,
    },
    {
      path: "/",  
      element: (
        <>
          <ScrollToTop />
          <SharedLayout />  
        </>
      ),
      children: [
        { 
          path: "overview", 
          element: <Overview /> 
        },
        { 
          path: "info", 
          element: <Info /> 
        },
      ],
    },
    {
      path: "/home",
      element: <Navigate to="/" replace />
    }
  ];

  return useRoutes(routes);
}
