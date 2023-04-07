//pulls in all the functions that allow us to get data from the user and assigns them to the variable input
const readline = require("readline-sync")
let n = Number(readline.question("Enter number of words : "))
console.log("There are " + n + "  Words")
// Assigning an empty array of words
var words=[]
for(let i=0;i<n;i++)
{
    let word=readline.question("Enter the word :")
    //The push() method adds one or more elements to the end of an array and returns the new length of the array
    words.push(word)
}


    //console.log(words)

const counter = {}

for (let index = 0; index < words.length; index++) {
  const element = words[index]
  //console.log(element)
  if (counter[element]) {
    counter[element] += 1
  } else {
    counter[element] = 1
  }
}
//console.log(counter)
console.log(Object.keys(counter).length)
console.log(counter)