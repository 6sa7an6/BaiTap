//Nhập vào chuỗi và trả về là các thành phần trong chuỗi đảo ngược
//tất cả khoảng trắng phải giữ lại.

let string = ('This is an example!')
let arr = string.split(' ');
let result = arr.map(daoNguoc = (item) => {
    return item.split('').reverse().join('');
})
console.log(result.join(' '));