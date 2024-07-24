function multiplicationTable(num) {
    let table = [];
    
    for (let i = 1; i <= 10; i++) {
        table[i - 1] = num * i;
    }
    
    return table;
}

// Test etmək üçün nümunə
console.log(multiplicationTable(5)); // Çıxış: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
