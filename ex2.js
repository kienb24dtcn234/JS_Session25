function findmin(a, b) {   
    if (arguments.length !== 2) {  
        return "Dữ liệu không hợp lệ";  
    }  
    if (Number.isInteger(a) && Number.isInteger(b)) {  
        return a + b;  
    }  
    return "Dữ liệu không hợp lệ";  
}  
console.log('Tổng của hai số là: ', findmin(2, 6));        
console.log('Kết quả là: ', findmin(3, "text"));          
console.log('Kết quả là: ', findmin(7, -7));             
console.log('Kết quả là: ', findmin(4.5, 3));              
console.log('Kết quả là: ', findmin(4, 5, 3));            