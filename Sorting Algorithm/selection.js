const arr = [3, 65, 12, 5, 10, 1, 18, 21, 7];

// Sorting array in ascending order using the selection sort algorithm.


for(let i=0;i<arr.length-1;i++){
    let minIndex =i;

    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[minIndex]){
            minIndex = j;
        }
    }
    // Swapping elements of the array
    let temp=arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
}
console.log(arr);