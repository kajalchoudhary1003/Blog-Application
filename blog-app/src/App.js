import React, { useState } from "react";
import Login from "./components/accounts/Login";
import DataProvider from "./context/DataProvider";
import Home from "./components/home/Home";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        {/* <div className="flex justify-center h-screen"> */}
        <Routes>
          <Route path="/login" element={<Login isUserAuthenticated={isUserAuthenticated}/>} />
          <Route path="/" element={<Home />} />
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
