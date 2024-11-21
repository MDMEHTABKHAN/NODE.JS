const fs = require('fs')


// code to read the content from file
// asysc execuetion excution lats

fs.readFile('input.txt' , (err, content) => {
    if(err){
        return console.log(err); 
    }else{
        console.log('Read content is : ' + content);
    }
});

let a = 13;
if(a % 2 == 0){
    console.log("even number");
}else{
    console.log("odd");
}


// sysc 
const content = fs.readFileSync('input.txt');
console.log("Read content is: " + content);



//  code to write the content to the file
// 1.  asysc

fs.writeFile('output.txt', "Hello Student", err => {
    if(err){
        console.log(err);
    }
    console.log('written succesfully');
})
console.log("last line");

let b = 14;
if(b % 2== 0){
    console.log("even");
}else{
    console.log("odd");
}


fs.writeFile('output.text', "Good Morning",  err=> {
    if (err) {
        return console.log(err);
    }
    console.log("Written succesfully");
})
let love = 143;
console.log(`I Love you ${love}`);

//  sysc write
fs.writeFileSync('output1.txt', "Hello student again!")