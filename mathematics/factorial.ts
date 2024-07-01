// Factorial 

/**
 * 
 * Iterative way or brute force
 */

function factorialIterativeApproach(num: number) : number {
    // Eg : num = 4 so result will be 1 and loop will start from 2 till n
    let result = 1
    for (let i = 2; i <= num; i++) {
        result = result * i
    }
    return result
}

console.log(factorialIterativeApproach(4))

/**
 * Recursive Approach
 */

function recursiveFactorialApproach(num: number) : number {
    // Base condition
    if (num === 0) {
        return 1
    }
    return num * recursiveFactorialApproach(num - 1)
}

console.log(recursiveFactorialApproach(2))

/**
 * Time Complexity -> O(n)
 * Space Complexity -> O(1)
 */