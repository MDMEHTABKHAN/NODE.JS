console.log("Hello World");
function sayHello(){
    console.log("How are you!");   
}
sayHello()
console.log("Good Morning");


function greet(){
    return function(){
        console.log("Gm");
    }
}

const result = greet();
result();
