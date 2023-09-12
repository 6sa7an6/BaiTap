/* Viết hàm nhận vào 1 số , kiểm tra nếu số đưa vào là số nguyên dương
thì kết quả trả về true , ngược lại trả về false */
let kiemTra = (a) => {
    return !isNaN(a) && Number.isInteger(a) && a > 0
}
console.log(kiemTra(-5));