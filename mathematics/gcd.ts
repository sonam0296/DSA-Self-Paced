/**
 * Greatest Common Divisor (GCD) 
 * 
 * Brute Force Approach
 */

function gcdNaiveApproach(a: number, b: number) {
    // Find the minimum of a and b
    let res = Math.min(a,b)
    // Loop till res > 0
    while(res > 0){
        if (a% res == 0 && b%res == 0) {
            break
        }
        res--
    }
    return res
}

console.log(gcdNaiveApproach(10, 15))

/**
 * Time Complexity -->> O(min(a,b))
 */

/**
 *  Optimized Solution => Euclidean Algorithm
 *  Brute Force Euclidean Algorithm 
 */

function euclideanNaiveApproach(a: number, b: number){
    while(a != b){
        if (a > b) {
            a = a - b
        }
        else{
            b = b - a
        }
    }
    return a
}

console.log(gcdNaiveApproach(12, 15))

/**
 * Optimized Euclidean Approach
 */

function optimizedApproach(a: number, b: number){
    if(b==0){
        return a
    }
    else{
        return optimizedApproach(b, a%b)
    }
}

console.log(optimizedApproach(5, 15))

// Time Complexity =>>> O(log(min(a,b)))