import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Integrations from "../Pages/Intergrations";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/integration"
        element={
          <PrivateRoute>
            <Integrations />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/blog"
        element={
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/features/timetracker"
        element={<PrivateRoute></PrivateRoute>}
      ></Route>
      <Route
        path="/features/projectmanagement"
        element={<PrivateRoute></PrivateRoute>}
      ></Route>
      <Route
        path="/features/onlinetimesheet"
        element={<PrivateRoute></PrivateRoute>}
      ></Route>
      <Route
        path="/features/timecards"
        element={<PrivateRoute></PrivateRoute>}
      ></Route>
      <Route
        path="/features/attendance"
        element={<PrivateRoute></PrivateRoute>}
      ></Route>
      <Route
        path="/features/timereporting"
        element={<PrivateRoute></PrivateRoute>}
      ></Route>
    </Routes>
  );
}

export default AllRoutes;
