let string = prompt('Hãy nhập đoạn text ngăn cách bởi dấu cách');
let arr = string.split(' ');
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
console.log(arr.join(' '));