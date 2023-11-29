// make a function that will reverse a string
// input : nivlA kcirtaP
// output : kapitalA nivlA
function reverseString(string) {
  const words = string.split('').reverse().join('');
  return console.log(words);
}

reverseString('nivlA kcirtaP');
