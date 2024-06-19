import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

// we are using context api to store name and username so that we can use them both in the application wherever an user would comment or post a new blog

const DataProvider = ({ children }) => {
  const [account, setAccount] = useState({ username: "", name: "" });

  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
