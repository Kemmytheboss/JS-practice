function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
let numbers = [5, 6, 1, 3, 4, 2];
console.log(bubbleSort(numbers)); 
function steps(n) {
    for (let i = 1; i <= n; i++) {
        console.log('#'.repeat(i));
    }
}

// Example usage:
steps(3);