
// const add = (a,b) => {
//     return a+b;
// }
// const mul = (d,c) => {
//     return d * c;
// }
//  1st way

// module.exports = add // now it's available everywhere
// module.exports = mul;

// 2nd way
// module.exports = {
//     add: add,
//     mul: mul
// }


// 3rd way to export module

exports.mult = (m,s) => {
    return s / m;
}