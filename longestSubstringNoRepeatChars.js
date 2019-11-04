var lengthOfLongestSubstring = function(s) {
  let i = 0;
  let j = 0;
  let ans = 0;
  let set = {};
  while (i < s.length && j < s.length) {
    if (!set[s[j]]) {
      set[s[j]] = s[j];
      j++;
    } else if (set[s[j]]) {
      delete set[s[i]];
      i++;
    }
    ans = Math.max(ans, j - i);
  }
  return ans;
}

































// var lengthOfLongestSubstring = function(s) {

//     let counts = [];
//     if (s === '') {
//         return 0;
//     }
//     if (s.length < 2) {
//         return 1;
//     }
//     for (let i = 0; i < s.length; i++) {
//       let counter = 1;
//       let substr = s[i];
      
//       for (let j = i + 1; j < s.length; j++) {
//           if (!substr.includes(s[j])) {
//               counter++;
//               substr += s[j];
//           } else {
//               break;
//           }
//       }
//       counts.push(counter);  
//   }
//     return Math.max(...counts);
// }