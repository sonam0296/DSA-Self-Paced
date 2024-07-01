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