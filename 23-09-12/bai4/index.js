/* Viết hàm kiểm tra xem ký tự nhập vào có phải ký tự số không.
nếu là ký tự số hàm trả về true , ngược lại trả về false */

let kiemTra = (a) => {
    return !isNaN(a);
}
console.log(kiemTra('c'));
console.log(kiemTra(4.5));