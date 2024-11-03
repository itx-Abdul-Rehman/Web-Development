
//commonJS Way  it is an default way

// let sum=(a,b)=>{
//     return a+b;
// }

// let sub=(c,d)=>{
//     return c-d;
// }

// module.exports={
//     sum,
//     sub
// };

let a=20;
let b=30;
exports.a=function sum(a,b) {
    return a+b;
};
exports.b=function sub(a,b) {
    return a+b;
}


// EcmaScript Module ES6 way it is an modern way
// In ES6 two type of exports

// // --> named export:
// const x = 10;
// const y = 30;
// const z = 40;

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// export { x, y, z, add, subtract };
// //--> default export:

// // let obj;
// // export default obj={
// //     a:10,
// //     b:30,
// //     b:40
// // } 

// export default function sum(a,b) {
//     return a+b;
// }


