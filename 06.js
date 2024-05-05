function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
const unsortedArray = [5, 3, 7, 2, 9, 1, 6, 4, 8];
const sortedArray = insertionSort(unsortedArray);
console.log("Sorted array :", sortedArray);