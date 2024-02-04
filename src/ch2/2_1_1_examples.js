import { head, pair, tail } from "../modules/sicpLib";

/* Rational numbers example */
function makeRational(n, d) { return pair(n, d); }

function numer(x) { return head(x); }

function denom(x) {return tail(x); }

/** 
 * x = n1/d1, y = n2/d2
 * x + y = n1/d1 + n2/d2 
 * = (n1*d2 + n2*d1)/(d1*d2)
*/
function addRational(x, y) {
    return makeRational(
            numer(x)*denom(y) + numer(y) * denom(x), 
            denom(x)*numer(y)
        );
}

/** 
 * x = n1/d1, y = n2/d2
 * x - y = n1/d1 - n2/d2 
 * = (n1*d2 - n2*d1)/(d1*d2)
*/
function subRational(x, y) {
    return makeRational(
            numer(x)*denom(y) - numer(y) * denom(x), 
            denom(x)*numer(y)
        );
}

/** 
 * x = n1/d1, y = n2/d2
 * x * y = n1/d1 * n2/d2 
 * = (n1*n2)/(d1*d2)
*/
function mulRational(x, y) {
    return makeRational(
            numer(x)*numer(y), 
            denom(x)*denom(y)
        );
}

/** 
 * x = n1/d1, y = n2/d2
 * x / y = (n1/d1) / (n2/d2) 
 * = (n1*d2)/(d1*n2)
*/
function divRational(x, y) {
    return makeRational(
            numer(x)*denom(y), 
            denom(x)*numer(y)
        );
}