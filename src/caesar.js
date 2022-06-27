// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    let output = "";
    input = input.toLowerCase();
    if (!encode) shift = -shift;
    for (let i = 0; i < input.length; i++){
      let curCharCode = input.charCodeAt(i);
      if (curCharCode < 97 || curCharCode > 122) {
        output += input.charAt(i);
        continue;
      }
      let shiftedCharCode = curCharCode += shift;
      if (shiftedCharCode > 122) shiftedCharCode = (shiftedCharCode - 122) + 96;
      if (shiftedCharCode < 97) shiftedCharCode = (shiftedCharCode - 97) + 123;
      output += String.fromCharCode(shiftedCharCode);
    }
    return output;
    
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
