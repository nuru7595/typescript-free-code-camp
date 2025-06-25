import { createContext, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    // Create Values Here;

    return (
        <GlobalContext.Provider
            value={
                {
                    // Pass Values Here;
                }
            }
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
