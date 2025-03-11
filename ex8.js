function password(password) {   
    if (password.length < 8) {  
        return false;  
    }  
    let inhoa = false;  
    let chu = false;  
    let so = false;  
    let kitudacbiet = false;  
    const kitu = /[@#$%^&+=]/; 
    for (let char of password) {  
        if (/[A-Z]/.test(char)) inhoa = true;   
        if (/[a-z]/.test(char)) chu = true;  
        if (/\d/.test(char)) so = true;   
        if (kitu.test(char)) kitudacbiet = true; 
    }  
    return inhoa && chu && so && kitudacbiet;  
}  
console.log(password("Abc123!@")); 
console.log(password("weakpass")); 