function songuyento(number) {
    if (Number.isInteger(number)) {
        let count = 0;
        for (let i = 1; i < number; i++){
            if (number % i == 0) {
                count++;
            }
        }
        count == 1 ? console.log("Số nguyên tố") : console.log("Không phải là số nguyên tố")
    }
}
songuyento(17);
songuyento(6);
songuyento("text");