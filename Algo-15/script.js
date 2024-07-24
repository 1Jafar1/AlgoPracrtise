function allOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return false; // Əgər heç olmasa bir ədəd cütdürsə, false qaytar
        }
    }
    return true; // Bütün ədədlər təkdirsə, true qaytar
}

// Test etmək üçün nümunələr
console.log(allOdd([1, 3, 5, 7])); // Çıxış: true
console.log(allOdd([1, 2, 3, 5])); // Çıxış: false
console.log(allOdd([9, 11, 13]));  // Çıxış: true
