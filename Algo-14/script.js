function countOccurrences(arr, num) {
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }
    
    return count;
}

// Test etmək üçün nümunələr
const numbers = [1, 2, 3, 2, 4, 2, 5, 6];
console.log(countOccurrences(numbers, 2)); // Çıxış: 3
console.log(countOccurrences(numbers, 7)); // Çıxış: 0
