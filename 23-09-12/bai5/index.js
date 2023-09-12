/* Viết hàm nhận vào 3 số nguyên bất kỳ , sau đó trả về số nguyên có giá trị nhỏ nhất. */

let max;
let kiemTra = (a, b, c) => {
    max = a;
    if (a > b) {
        max = b;
    }
    if (b > c) {
        max = c;
    }
    return max;
}
kiemTra(4, 5, 6);
console.log(`Số nhỏ nhất là : ${max}`);