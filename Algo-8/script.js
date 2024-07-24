function sumOfPrimes(arr) {
    let sum = 0;

    for (let j = 0; j < arr.length; j++) {
        let num = arr[j];
        if (num < 2) continue;

        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            sum += num;
        }
    }

    return sum;
}

// Test etmək üçün nümunə array
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(sumOfPrimes(numbers)); // Çıxış: 28 (2 + 3 + 5 + 7 + 11)
