let arr = [6, 8, 2, 5, 1, 3, 4, 5];
let temp;
for(let i = 0 ; i < arr.length - 1 ; i++){
    for(let j = 0 ; j < arr.length -1 -i ; j++){
        if(arr[j] > arr[j+1]){
        temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        }
    }
}
console.log(arr);