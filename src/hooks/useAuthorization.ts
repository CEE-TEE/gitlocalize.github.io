import { useState, useEffect } from 'react';
import {getUserRequest} from "@site/src/services/authorization";
import {deleteCookie, getCookie} from "@site/src/utils/getCookies";
import {User} from "@site/src/types";
const AUTH_TOKEN_PROPERTY = 'auth_token';

export const useAuthorization = () => {
    const [token, setToken] = useState(getCookie(AUTH_TOKEN_PROPERTY));
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (token) {
            setToken(token);
            getUserRequest(token).then((response: User) => {
                setUser(response);
            }, (error) => {
                setToken(null);
                deleteCookie(AUTH_TOKEN_PROPERTY);
            });
        }
    }, []);

    return [token, user];
}
