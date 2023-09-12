//Viết chương trình tạo hàm để kiểm tra xem
// năm người dùng nhập vào có phải năm nhuận không

let kiemTra = (number) => {
    if (number % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
let number = +prompt('Hãy nhập năm cần kiểm tra')
kiemTra(number) ? console.log(`Năm ${number} là năm nhuận.`) : console.log(`Năm ${number} không phải năm nhuận.`);