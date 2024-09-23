// function 


// sum 
function sum(a, b){
    let res = a + b;
    return res;
}
let add = sum(10,9);
console.log(add);


// mul 

let mul = (a, b) => {
    return a *b;
};
let res = mul(3,4);
console.log(res);

let greet = (name, greeting = "Hello") =>{
    return `${greeting} ${name}!`;
}

console.log(greet("Mehtab"));


let createuser = (name, age) => {
    return{
        name: name,
        age: age,
    };
};
let user = createuser("Mehtab", 23);
console.log(user);

