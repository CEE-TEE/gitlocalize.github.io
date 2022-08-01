import React, { createContext } from 'react';
import {useAuthorization} from "@site/src/hooks/useAuthorization";

export const AuthorizationContext = createContext(null);

export default function AuthorizationProvider({children}): JSX.Element {
    const [token, user] = useAuthorization();

    return (
        <AuthorizationContext.Provider value={{token, user}}>
            {children}
        </AuthorizationContext.Provider>
    );
};
