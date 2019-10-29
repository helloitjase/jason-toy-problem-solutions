var decodeString = function(s) {
  let repeat = '';
  let counter = 0;
  let final = '';
  let number = '';
  let chunk = false;
  for (let i = 0; i < s.length; i++) {
    if (!chunk && (Number(s[i]) || s[i] === '0')) {
      number += s[i];   
    } else if (s[i] === '[') {
      if (chunk) {
        repeat += s[i];
      }  
      counter++;
      chunk = true;
    } else if (s[i] === ']') {
      counter--;
      if (chunk) {
        repeat += s[i];
      }
      if (counter === 0) {
        // let breakdown = decodeString(repeat);
        let breakdown = '';
        for (let i = 0; i < Number(number); i++) {
//           debugger;
          breakdown += decodeString(repeat);
        }
        final += breakdown;
        repeat = '';
        number = '';
        chunk = false;
      }
    } else if (counter > 0) {
      repeat += s[i];
    }
    if (counter === 0 && (s[i] !== '[' && s[i] !== ']') && (!Number(s[i]) && s[i] !== '0')) {
      final += s[i];
  }
  }  
  return final;
}