let string = prompt('Hãy nhập vào chuỗi cần kiểm tra');
let arr = string.split('');
let result = arr.slice(0);
result.reverse();
let reversedString = result.join('')
string === reversedString ? console.log('Đây là chuỗi đối xứng') : console.log('Đây không phải chuỗi đối xứng');