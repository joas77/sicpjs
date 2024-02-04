export function pair(a, b) {
    return {
        head: a,
        tail: b
    };
}

export function head(pair) {
    return pair.head;
}

export function tail(pair) {
    return pair.tail;
}