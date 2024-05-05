function bubbleSort(arr) {
    const len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}
const unsortedArray = [5, 3, 7, 2, 9, 1, 6, 4, 8];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array using Bubble Sort:", sortedArray);