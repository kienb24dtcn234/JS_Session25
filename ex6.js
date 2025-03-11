function kiemtra() {
    let text = (prompt("Nhập chuỗi :"));
    let flag = 1;
    for (let i = 0; i < text.length / 2; i++){
        if (text[i] != text[text.length - 1 - i]) {
            flag = 0;
        }
    }
    flag ? console.log("Là chuỗi đối xứng") : console.log("Đây không phải là chuỗi đối xứng")
}
kiemtra();