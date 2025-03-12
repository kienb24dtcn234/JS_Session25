let products = [  
    ["mi tôm", 5, 5000],  
    ["bánh mì", 12, 15000],  
    ["bánh bao", 5, 8000],  
    ["mềm mến", 30, 20000]  
];  
let cart = [];  
function showProducts() {  
    console.log("Danh sách sản phẩm:");  
    products.forEach((product, index) => {  
        console.log(`${index + 1}. Tên: ${product[0]}, Số lượng: ${product[1]}, Giá: ${product[2]}`);  
    });  
}  
function addToCart(productIndex, quantity) {  
    if (productIndex < 0 || productIndex >= products.length) {  
        console.log("Sản phẩm không có trong cửa hàng.");  
        return;  
    }  
    let product = products[productIndex];  
    
    if (product[1] === 0) {  
        console.log("Sản phẩm đã bán hết.");  
        return;  
    }  

    if (quantity > product[1]) {  
        console.log("Số lượng yêu cầu vượt quá mức hàng có sẵn.");  
        return;  
    }  
    product[1] -= quantity; 
    cart.push([product[0], quantity, product[2] * quantity]);  
    console.log(`Đã thêm ${quantity} ${product[0]} vào giỏ hàng.`);  
}  
function viewCart() {  
    console.log("Nội dung giỏ hàng:");  
    let total = 0;  
    cart.forEach(item => {  
        console.log(`${item[0]}: ${item[1]} cái, Tổng tiền: ${item[2]} VNĐ`);  
        total += item[2];  
    });  
    console.log(`Tổng cộng: ${total} VNĐ`);  
}  
showProducts();  
addToCart(0, 2); 
addToCart(2, 1); 
viewCart(); 