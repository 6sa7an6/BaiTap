//Cho người dùng nhập vào chuỗi kí tự. 
//Viết hàm kiểm tra xem tần suất xuất hiện của mỗi ký tự và in ra chúng.

let kiemTra = (string) => {
    let arr = {};
    let fixedString = string.replace(/\s/g, '');
    for (let i = 0; i < fixedString.length; i++) {
        let a = fixedString[i];
        if (arr[a] === undefined) {
            arr[a] = 1;
        } else { arr[a]++; }
    }
    for (let a in arr) {
        console.log(`${a} xuat hien ${arr[a]} lan`);
    }
}
let string = prompt('Hãy nhập chuỗi cần kiểm tra')
kiemTra(string);