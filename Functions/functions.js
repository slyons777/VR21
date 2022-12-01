
//DIFFERENCE: this function takes in two parameters and returns the difference of the two;
const difference = (num1,num2) => {return num1 - num2}
console.log(difference(3,2))

//PRODUCT: this function takes in two parameters and returns the product of the two;
const product = (num1,num2) => {return num1 * num2}
console.log(product(3,2))

//PRINTDAY: this function takes in one parameter (a number from 1-7) and returns the 
//day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less 
//than 1 or greater than 7, the function should return undefined;
// const printDay = num => {
//     switch case
// }


//lastElement: this function takes in one parameter (an array) and returns the last value 
//in the array. It should return undefined if the array is empty.
const lastElement = array => { return array[array[array.length - 1]]}


console.log(lastElement([5,4,3,2]))

//numberCompare: this function takes in two parameters (both numbers). If the first is greater 
//than the second, this function returns “First is greater”. If the second number is greater than 
//the first, the function returns “Second is greater”. Otherwise the function returns “Numbers are equal”
const numberCompare = (num1, num2) => {
    if (num1 > num2) {
        return "First is greater"
    } else if(num2 > num1) {
        return "Second is greater."
    } else {
        return "Numbers are equal"
    }
}

console.log(numberCompare(2,1))
console.log(numberCompare(1,1))

//singleLetterCount: this function takes in two parameters (two strings). The first parameter 
//should be a word and the second should be a letter. The function returns the number of times 
//that letter appears in the word. The function should be case insensitive (does not matter if 
//the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

const singleLetterCount = (string1, string2) => {
    let splitString = Array.from(string1)
    
    splitString.forEach(char => {
        
        if (char == string2) {
            let count = 0;
            count += 1
            return count;
        } else {
            return 0;
        }     
    });
    
}

console.log(singleLetterCount('Amazing','A'))

//isPalindrome: A Palindrome is a word, phrase, number, or other sequence of characters which reads the same 
//backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. 
//As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome(‘a man a plan a canal Panama’); 
//returns true

const isPalindrome = (string1) => {
    if (string1.reverse === string1) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome('testing'))

