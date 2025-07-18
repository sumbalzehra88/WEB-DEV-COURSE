console.log("This is script2.js, loaded after script1.js");
let a = 5;
if(a>10) {
    console.log("a is greater than 10");
}
console.log("This is index.js, the main entry point of the web development course.");

console.log("loops in javascript");

a = 1;
for(i = 0; i < 100; i++) {
    console.log("Loop iteration: " , a + i);
}

let obj ={

    name: "sumbal",
    age: 25,
    city: "Karachi",
    company: "Tech Solutions"
}

for (let key in obj) {
    console.log("Key: ", key, "Value: ", obj[key]);
}

for(let c of "Hello World") {
    console.log("Character: ", c);
}

let j = 8;
while(j > 0) {
    console.log("j is: ", j);
    j--;
}

do {
    console.log("j is still: ", j);
    j--;
} while(j > 0);

const func = (a, b) => {
    console.log("Function called with arguments: ", a, b);
    return a + b;
}

console.log("Calling function with 5 and 10: ", func(5, 10));
console.log("calling function with 20 and 30: ", func(20, 30));

let s = "harry potter";
console.log(`his name is ${s}`);

let z = "abiha";
console.log(`her name is ${z}`);

const a1 = [1, 2, 3, 4, 5];
const a2 = [6, 7, 8, 9, 10];
const a3 = [11, 12, 13, 14, 15];
const result = a1.concat(a2, a3);
console.log(result);