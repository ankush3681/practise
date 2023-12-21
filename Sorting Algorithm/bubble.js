const arr = [3, 65, 12, 5, 10, 1, 18, 21, 7];

// Sorting array in ascending order using bubble sort algorithm.

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j]= arr[j+1];
            arr[j+1] = temp;
        }
    }
    console.log(arr);
}
console.log(arr);