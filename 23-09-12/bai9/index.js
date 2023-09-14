let kiemTra = (string) => {
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        let a = string[i];
        if (arr[a] === undefined) {
            arr[a] = 1;
        } else {
            arr[a]++
        }
    }
    for ( let a in arr){
        console.log(`${a} xuat hien ${arr[a]} lam`);
    }
}
kiemTra('Hello')