const name = "pawan"
const repoCount = 30

//console.log( name + repoCount + " value"); // not a good way to concatenate


// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // string interpolation 


const gameName =  new String('pawan shrestha');

// console.log(gameName[4])
// console.log(gameName.length);

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('a'))


const anotherString = gameName.slice (-13, 5);// slice
// console.log(anotherString);
// console.log(gameName.length);


const nweStringOne = "  pawan  "
// console.log(nweStringOne)
// console.log(nweStringOne.trim()) // trim



//replace

const url = "https://www.pawan/pawan%20shrestha.com"
console.log(url.replace('%20', '_'))

console.log(url.includes('pradeep'))


console.log(gameName.split('-'))
