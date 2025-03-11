function check(arr) {  
    let arrNew = [];  
    if (Array.isArray(arr)) {  
        for (let i = 0; i < arr.length; i++) {  
            if (typeof arr[i] === 'number' && arr[i] % 2 === 0) {  
                arrNew.push(arr[i]);  
            }  
        }  
        arrNew.length > 0 ? console.log(arrNew) : console.log("mảng không chứa số chắn");  
    } else {  
        console.log("dữ liệu không hợp lệ");  
    }  
}  
check([11, 4, 65, 6]); 
check([1, 3, 5, 17]); 
check("text"); 