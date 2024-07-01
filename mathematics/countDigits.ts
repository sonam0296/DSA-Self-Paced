function countDigits(num: number) : number {
    // Initializing count i.e 0
    let count = 0;
    // Loop till num > 0
    while(num > 0) {
        // Start removing the digits from end
        num = Math.floor(num / 10)
        count++
    }
    return count
}

console.log(countDigits(768))

/**
 * Time Complexity -- O(N) ===>> As loop is running n times 
 * Space Complexity --- O(1)
 */