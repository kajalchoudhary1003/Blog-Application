import React from "react";
import Login from "./components/accounts/Login";
import DataProvider from "./context/DataProvider";
import Home from "./components/home/Home";


function App() {
  return (
    <div className="flex justify-center h-screen">
<DataProvider>
<Login />
<Home />
</DataProvider>
    </div>
  );
}

export default App;
