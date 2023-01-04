
export const encodeURL = (str) => {
    return window.btoa(unescape(encodeURIComponent(str)));
}
export const decodeURL = (str) => {
    return decodeURIComponent(escape(window.atob(str)));
}