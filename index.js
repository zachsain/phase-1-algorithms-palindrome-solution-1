function reverseWord(word) {

  const wordArray = word.split('')
  const reversedArray = wordArray.reverse()
  const reversedWord = reversedArray.join("")
  return reversedWord

}


function isPalindrome(word) {
  
  const reverse = reverseWord(word)

  if (word === reverse) {
    return true 
  } else {
    return false
  }
 
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


console.log(isPalindrome("racecar"))