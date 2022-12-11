/_
Challenge 1:
Given an array of numbers, return an array of each number, squared
_/
const nums = [1, 2, 3, 4, 5]
// --> [1, 4, 9, 16, 25]
// Your code here
// first try
const numssquared = map().nums (square => square^2)
console.log(numssquared)
// second try
const numssquared = nums.map(square => Math.pow(square,2))
console.log(numssquared)

/_
Challenge 2:
Given an array of strings, return an array where
the first letter of each string is capitalized
_/

const names = ["alice", "bob", "charlie", "danielle"]
// --> ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capnames = names.map(i => i.substring(0,1).toUpperCase() + i.substring(1, i.length))
console.log(capnames)

/\*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
\*/
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

const htmlpokemon = pokemon.map(html => {
const p = document.createElement('p');
p.innerText = html;
return p
});
console.log(htmlpokemon)
