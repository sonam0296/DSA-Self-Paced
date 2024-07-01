// Palindrome or not

function palindromeNum(value: number | string) : boolean {
    // Convert the input value to string which will work for any type of data
    const convertedValue = String(value)
    // Using two pointer approach 
    let left = 0
    let right = convertedValue.length - 1
    while(left < right){
        // Check if left and right of convertedValue is not equal 
        if (convertedValue[left] !== convertedValue[right]) {
            return false
        }
        // Update left and right
        left++
        right--
    }
    return true
}

console.log(palindromeNum("tatw"))

/**
 * 
 * Time Complexity -> O(n)
 * Space Complexity -> O(1)
 * 
 */

/**
 *  We can solve the above problem with different ways 
 * 
 * The above way was using Two Pointer approach 
 * 
 * Below is brute force approach
 * 
 */

function bruteForcePalindrome(num: number) {
    // Reverse the num and get the last digit and add to the reverse and compare it
    let reverse = 0
    let temp = num
    while(temp > 0){
        // Find the last digit
        let digit = temp % 10
        // Add the digit to reverse 
        reverse = reverse * 10 + digit
        // Remove the last digit from temp
        temp = Math.floor(temp/10)
    }
    
    if (num === reverse) {
        return "Palindrome"
    }
    else{
        return 'Not Palindrome'
    }
}

console.log(bruteForcePalindrome(8778))