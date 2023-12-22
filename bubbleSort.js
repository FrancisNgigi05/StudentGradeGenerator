let arrayNumbers = [10, 11, 3, 4, 5, 1, 6];
sortedArray(arrayNumbers);

function sortedArray(arrayNumbers) {
    let arraySize = arrayNumbers.length;

    for (let i = 0; i < arraySize - 1; i++) {
        for (let j = 0; j < arraySize - i - 1; j++) {
            if (arrayNumbers[j] > arrayNumbers[j + 1]) {
                let temp = arrayNumbers[j];
                arrayNumbers[j] = arrayNumbers[j + 1];
                arrayNumbers[j + 1] = temp;
            }
        }
    }
    console.log(arrayNumbers);
}
