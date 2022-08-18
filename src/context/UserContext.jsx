import { createContext } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const accountname = localStorage.getItem("accountname");
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    return (
        <UserContext.Provider value={{ accountname, token, username }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };
