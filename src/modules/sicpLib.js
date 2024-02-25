export function error(...args) {
    console.error(args);
}

export function pair(x, y) {
    function dispatch(m) {
        return m === 0
        ? x
        : m === 1
        ? y
        : error(m, "argument not 0 or 1 -- pair"); 
    }
    return dispatch;
}

export function head(pair) {
    return z(0);
}

export function tail(pair) {
    return z(1)
}