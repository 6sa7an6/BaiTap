let string = prompt('Nhập chuỗi ngăn cách bởi dấu cách');
let arr = string.split('');
let result = '';
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
        result += arr[i].toLowerCase();
    } else {
        result += arr[i].toUpperCase();
    }
}
console.log(result);