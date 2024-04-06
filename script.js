// complete the given function

function palindrome(str){
const cleanStr=str.replace(/[^a-zA-Z0-9]/g, " ").toLowercase();
return cleanStr===cleanStr.split('').reverse().join();
}
module.exports = palindrome
