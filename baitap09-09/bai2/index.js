let arr = ['a', '5', 'b', '4', '2', 'd'];
let result = 0;
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        result++;
    }
}
console.log(result);