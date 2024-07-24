function findMissingNumber(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            return arr[i] + 1;
        }
    }
    return null; // Bütün ədədlər varsa, null qaytarır
}

// Test etmək üçün nümunə
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8, 9, 10])); // Çıxış: 7
