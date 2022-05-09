import { createContext, useState } from "react";

interface ToggleThemeContextProps {
    toggleTheme: () => void;
}

export const ToggleThemeContext = createContext({} as ToggleThemeContextProps);

// export const ToggleThemeProvide = ({children}:{children:JSX.Element}) => {

    

//     return (
//         <ToggleThemeContext.Provider value={{toggleTheme: () => void }}>
//             {children}
//         </ToggleThemeContext.Provider>
//     );
// }