// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "(i/j)", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const values = ["11", "21", "31", "41", "51" , "12", "22", "32", "42", "52", "13", "23", "33", "43", "53", "14", "24", "34", "44", "54", "15", "25", "35", "45", "55"];
    
    let output = "";
    if (!encode){
      if ((input.replaceAll(" ", "").length) % 2 != 0) return false;
      for (let i = 0; i < input.length; i+=2){
        const num = input.substring(i, i+2);
        if (num.includes(" ")){
          i--;
          output += " ";
          continue;
        }
        let spot = values.indexOf(num)
        output += alpha[spot];
      }
      return output;
    }
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++){
      const curLetter = input.charAt(i);
      if (curLetter === " "){
        output += " ";
        continue;
      } 
      if (curLetter === "i" || curLetter === "j"){
        output += values[alpha.indexOf("(i/j)")];
        continue;
      }
      output += values[(alpha.indexOf(curLetter))];
    }
    return output;
  }

  return {
    polybius,
  };
})();
/*
const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "(i/j)", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const values = [11, 21, 31, 41, 51 , 12, 22, 32, 42, 52, 13, 23, 33, 43, 53, 14, 24, 34, 44, 54, 15, 25, 35, 45, 55];

console.log(values[8]);
console.log(alpha[8]);
console.log(values[alpha.indexOf("(i/j)")]);
*/
module.exports = { polybius: polybiusModule.polybius };
