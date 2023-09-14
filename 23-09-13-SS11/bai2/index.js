//Nhập vào chuỗi chữ số nguyên , tính tổng các số nguyên tố có trong chuỗi
let string = ('123456789')
let arr = string.split('');
let fixArr = arr.map((number) => {
    return Number(number)
})
let kiemTra = (a) => {
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}
let soNguyenTo = fixArr.filter(kiemTra);
let result = soNguyenTo.reduce((accumulator, item) => {
    return accumulator + item;
})
console.log(result);