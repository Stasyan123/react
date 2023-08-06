import React, { createContext, useState } from "react";

export const LoadingContext = createContext(null);

const LoadingContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <LoadingContext.Provider
      value={{
        isLoading: isLoading,
        error: error,
        setIsLoading: setIsLoading,
        setError: setError,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
