// Viết chương trình nhập vào chuỗi ký tự , xóa ký tự số trong đó

let string = ('abcdef1234')
let arr = string.split('');
let result = arr.filter(kiemTra = (item) => {
    return isNaN(item)
})

console.log(result.join(''));