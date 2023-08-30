import React, { useState } from "react";
import Login from "./components/accounts/Login";
import DataProvider from "./context/DataProvider";
import Home from "./components/home/Home";
import Header from "./components/header/header";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

// checks if the user logged in or not
const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<Login isUserAuthenticated={isUserAuthenticated} />}
          />
          <Route
            path="/"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
