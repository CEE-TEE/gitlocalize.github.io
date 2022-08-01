import React from 'react';
import AuthorizationProvider from "@site/src/contexts/Authorization";

export default function Root({children}) {
    return (
        <AuthorizationProvider>
            {children}
        </AuthorizationProvider>
    );
};