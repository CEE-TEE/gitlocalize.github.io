import { useState, useEffect } from 'react';
import {getUserRequest} from "@site/src/services/authorization";
import {deleteCookie, getCookie} from "@site/src/utils/сookiesUtils";
import {getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem} from "@site/src/utils/localStorageUtils";
import {User} from "@site/src/types";
const AUTH_TOKEN_PROPERTY = 'auth_token';
const AUTH_USER_PROPERTY = 'auth_user';

export const useAuthorization = () => {
    const [token, setToken] = useState(getCookie(AUTH_TOKEN_PROPERTY));
    const [user, setUser] = useState(getLocalStorageItem(AUTH_USER_PROPERTY));

    useEffect(() => {
        if (token) {
            setToken(token);
            getUserRequest(token).then((response: User) => {
                setUser(response);
                setLocalStorageItem(AUTH_USER_PROPERTY, response);
            }, (error) => {//todo если ошибка, чистим cookie и LocalStorage
                setToken(null);
                setUser(null);
                deleteCookie(AUTH_TOKEN_PROPERTY);
                removeLocalStorageItem(AUTH_USER_PROPERTY);
            });
        } else if (user) {//todo если нету token чистим LocalStorage
            setUser(null);
            removeLocalStorageItem(AUTH_USER_PROPERTY);
        }
    }, []);

    return [token, user];
}
