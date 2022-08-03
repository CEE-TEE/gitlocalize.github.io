import Cookies from 'universal-cookie';
const cookies = new Cookies();

export function getCookie(name) {
  return cookies.get(name);
}

export function setCookie(name, value, options = {}) {
  cookies.set(name, value);
}

export function removeCookie(name) {
  cookies.remove(name);
}


