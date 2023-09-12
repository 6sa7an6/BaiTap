/* Viết hàm truyền vào 2 số nguyên bất kỳ , 
sau đó thực hiện đổi chỗ 2 số nguyên đó */

let doiCho = (a, b) => {
    let temp = a;
    a = b;
    b = temp;
    console.log(a, b);
}
doiCho(9, 6)