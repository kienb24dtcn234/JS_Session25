function inhoa() {  
    let text = prompt("Nhập chuỗi:");  
    let word = text.split(" "); 
    let cap = word.map(word =>   
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() 
    );  
    let result = cap.join(" "); 
    console.log(result);  
}  
inhoa();  