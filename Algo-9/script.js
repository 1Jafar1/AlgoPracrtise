function removeDuplicates(arr) {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray[uniqueArray.length] = arr[i];
        }
    }

    return uniqueArray;
}

// Test etmək üçün nümunə array
const numbers = [1, 2, 3, 2, 4, 5, 4, 6, 7, 8, 8, 9];
console.log(removeDuplicates(numbers)); // Çıxış: [1, 2, 3, 4, 5, 6, 7, 8, 9]
