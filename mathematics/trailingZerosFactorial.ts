// Trailing Zeros in factorial

/*
* Brute Force Approach
*/

function countZeros(num: number){
    // Find factorial of number
    let fact = 1
    for (let i = 2; i <=num; i++) {
        fact = fact * i
    }

    // Now count the 0's
    let result = 0
    while(fact%10 === 0){
        result ++
        fact = fact / 10
    }
    return result
}

console.log(countZeros(10))

/**
 * Time Complexity - O(n)
 * 
 */
/**
 * Optimal Solution -- Get the 5 prime factors -->> so formula will be num/5 + num/25 + num/125
 */

function optimalApproach(num: number): number {
    let res = 0
    for (let i = 5; i <= num; i++) {
        res = res + Math.floor(num/i)        
    }
    return res
}

console.log(optimalApproach(5))

