/* Bài tập : cho người dùng nhập vào 1 chuỗi , 
in ra chuỗi có độ dài lớn nhất gồm các phần tử không trùng nhau.
ví dụ :
input: “bcdbef” output : “cdbef” -> vòng : “b” , “bc” , “bcd” , “c” , “cd” , “cdbef”.... 
input : “aaaca” output :”ac”
Input : “aabbaca” output: “bac”
 */
let string = prompt('Hãy nhập chuỗi cần kiểm tra')
let fixString = '';
let maxString = '';
let kiemTra = (inputString) => {
    for (let i = 0; i < inputString.length; i++) {
        let a = string[i];
        if (fixString.includes(a)) {
            fixString = fixString.slice(fixString.indexOf(a) + 1)
        }
        fixString += a;
        if (fixString.length > maxString.length) {
            maxString = fixString;
        }
    }
    return maxString;
}

console.log(kiemTra(string));