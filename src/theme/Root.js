import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import AuthorizationProvider from "@site/src/contexts/Authorization";

export default function Root({children}) {
    return (
        <BrowserOnly>
            {() => (
                <AuthorizationProvider>
                    {children}
                </AuthorizationProvider>
            )}
        </BrowserOnly>
    );
};