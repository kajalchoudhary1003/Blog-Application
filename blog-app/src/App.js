import React from "react";
import Login from "./components/accounts/Login";
import DataProvider from "./context/DataProvider";


function App() {
  return (
    <div className="flex justify-center h-screen">
<DataProvider>
<Login />
</DataProvider>
    </div>
  );
}

export default App;
