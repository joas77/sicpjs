/**
 * Exercise 1.11
 * A function  f is defined by the rules
 * f(n) = n if n < 3 and
 * f(n)=f(n−1)+2f(n−2)+3f(n−3) if n>3
 *  Write a JavaScript function that computes f by means of a recursive process.
 * Write a function that computes f by means of an iterative process.
 */

function exercise1_11(n) {
    return f(n);
}

function f(n) {
    return n < 3 ? n :
        f(n-1) + 2*f(n-1) + 2*f(n-2) + 3*f(n-3);
}


/**
 * Exercise 1.12
 * Write a function that computes elements of Pascal's triangle by means of a recursive process.
 *
 */
function pascalTriangle(row, column) {
    return row === 0 && column === 0 ? 1 :
        pascalTriangle(row - 1, column - 1) +
        pascalTriangle(row - 1, column);
}
