function gurpreetSort(arr) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const bigger = arr.splice(i, 1)[0];
                arr.push(bigger);
                i--;
                sorted = false;
            }
        }
    }

    return arr;
}

// Example:
console.log(gurpreetSort([5, 3, 8, 1, 4]));
