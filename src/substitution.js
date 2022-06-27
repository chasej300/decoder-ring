// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet = "", encode = true) {
    if (alphabet.length !== 26) return false;
    for (i = 0; i < input.length; i++) {
      if (alphabet.indexOf(input[i]) !== alphabet.lastIndexOf(input[i])) {
        return false;
      }
    }
    input = input.toLowerCase();
    let startAplha = "";
    let finishAlpha = "";
    if (encode){
      startAplha = "abcdefghijklmnopqrstuvwxyz";
      finishAlpha = alphabet.toLowerCase();
    }
    else {
      finishAlpha = "abcdefghijklmnopqrstuvwxyz";
      startAplha = alphabet.toLowerCase();
    }
    
    let output = "";
    for (let i = 0; i < input.length; i++){
      const curLetter = input.charAt(i);
      if (curLetter === " "){
        output += " ";
        continue;
      }
      if (!startAplha.includes(curLetter)){
        output += curLetter;
        continue;
      }
      output += finishAlpha.charAt(startAplha.indexOf(curLetter));
    }
    return output;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
