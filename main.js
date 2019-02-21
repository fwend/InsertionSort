const a = [8,3,1,2,9,7,4,6,5,0];

const insertionSort = (array) => {
    
    for (let i = 1; i < array.length; i++) {

        let key = array[i];

        let j = i - 1;
        for (; j >= 0 && array[j] > key; j--) {
            array[j + 1] = array[j];
        }

        array[j + 1] = key;
    }

    return array;
}

console.log(insertionSort(a));