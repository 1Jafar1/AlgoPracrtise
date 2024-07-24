function complete(start, end) {
    let result = [];
    
    for (let i = start; i <= end; i++) {
        result[result.length] = i;
    }
    
    return result;
}

// Test etmək üçün nümunə
console.log(complete(1, 12)); // Çıxış: [1, 2, 3, 4, 5]
