var lengthOfLongestSubstring = function(s) {
    let counts = [];
    if (s === '') {
        return 0;
    }
    if (s.length < 2) {
        return 1;
    }
    for (let i = 0; i < s.length; i++) {
      let counter = 1;
      let substr = s[i];
      
      for (let j = i + 1; j < s.length; j++) {
          if (!substr.includes(s[j])) {
              counter++;
              substr += s[j];
          } else {
              break;
          }
      }
      counts.push(counter);  
  }
    return Math.max(...counts);
}