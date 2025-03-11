function songuyenduong(arr) {  
    let count = 0;  
    if (Array.isArray(arr)) {  
        for (let i = -1; i < arr.length -1; i++) {  
            if (Number.isInteger(arr[i+1]) && arr[i+1] > 0) {  
                count++;  
            }  
        }  
        count > 0 ? console.log(count) : console.log("không có số nguyên dương trong mảng");  
    } else {  
        console.log("dữ liệu không hợp lệ");  
    }  
}  
songuyenduong([4, 5.4, 6, -2]); 
songuyenduong([1, 2, 5, 7, -8, 6]);  
songuyenduong([1.2, -3, -6]); 
