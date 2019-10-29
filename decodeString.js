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
      if (counter === 0) {
        let breakdown = '';
        for (let i = 0; i < Number(number); i++) {
          breakdown += decodeString(repeat);
        }
        final += breakdown;
        repeat = '';
        number = '';
        chunk = false;
      }
         if (chunk) {
        repeat += s[i];
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

// function decodeString(s) {
//   let stack = []
//   debugger;
//   let curNum = 0
//   let curString = ''
//   for (let c of s) {
//     if (c === '[') {
//       stack.push(curString)
//       stack.push(curNum)
//       curNum = 0
//       curString = ''
//     } else if (c === ']') {
//       let num = stack.pop()
//       let prevString = stack.pop()
//       curString = prevString + curString.repeat(parseInt(num))
//     } else if (parseInt(c) || c === '0') {
//       curNum = curNum*10 + parseInt(c)
//     } else {
//       curString += c
//     }
//   }
//   return curString
// }
