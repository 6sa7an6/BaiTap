/* viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào ,
gọi hàm vừa xây dựng được */

let tinhGiaiThua = (a) => {
    if (a == 0) {
        return 1;
    }
    return a * tinhGiaiThua(--a);
}
result = tinhGiaiThua(5);
console.log(result);