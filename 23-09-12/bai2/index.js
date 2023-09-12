/* Viết hàm tính diện tích , chu vi hình tròn .
gọi hàm vừa xây dựng được */

const Pi = 3.14;
let tinhS = (r) => {
    return Pi * r ** 2;
}
let tinhP = (r) => {
    return Pi * r * 2;
}
console.log(`Diện tích là ${tinhS(5)}`);
console.log(`Chu Vi là ${tinhP(5)}`);