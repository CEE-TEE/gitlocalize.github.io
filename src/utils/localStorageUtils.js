import _ from 'lodash';

export function setLocalStorageItem(key, value) {
    const itemStringify = JSON.stringify(value);
    localStorage.setItem(key, itemStringify);
}
export function getLocalStorageItem(key) {
    let resultItem = null;
    try {
        const item = localStorage.getItem(key);
        const itemParsed = JSON.parse(item);

        if (_.isPlainObject(itemParsed)) {
            resultItem = JSON.parse(item);
        }
    } catch (e) {
        // console.warn('error', e);
    }
    return resultItem
}

export function removeLocalStorageItem(key) {
    localStorage.removeItem(key)
}