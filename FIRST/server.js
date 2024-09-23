// callback function
function callBack(){
    console.log("Mehtab");
}

const add = function (a,b, callBack){
    let sum =  a + b;
    callBack()
    return sum;
}

let res = add(10,9,callBack);
console.log(res);


