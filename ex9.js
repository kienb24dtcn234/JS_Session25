let users = []; 
function Email(email) {  
    const kiemtra = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;  
    return kiemtra.test(email);  
}  
function test(email) {  
    if (Email(email)) {  
        console.log("Email không hợp lệ. Email phải chứa ký tự @ và kết thúc bằng .com hoặc .vn.");  
        return;  
    }  
    if (users.includes(email)) {  
        console.log("Tài khoản đã tồn tại.");  
    } else {   
        users.push(email);  
        console.log("Đăng ký tài khoản thành công:", email);  
    }  
}  
test("test@example.com"); 
test("test@example.com");   
test("invalid-email");  
test("thekien@example.vn");   