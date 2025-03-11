function findmin(arr) {  
    if (!Array.isArray(arr)) {  
        console.log("Dữ liệu không hợp lệ"); 
        return;  
    }   
    if (arr.length === 0) {  
        console.log("Mảng không chứa phần tử"); 
        return;  
    }  
    
    let minElement = arr[0];  
    for (let i = 1; i < arr.length; i++) {  
        if (minElement > arr[i]) {  
            minElement = arr[i];  
        }  
    }  
    return minElement;  
}  
console.log(findmin([2, 4, 8, 1, 9])); 
console.log(findmin([])); 
console.log(findmin("abc")); 
console.log(findmin([5, 2, 7, 5, 4]));