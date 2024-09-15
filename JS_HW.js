const item_1 = 5;
console.log(item_1);

const item_2 = 3;
console.log(item_2);

const item_3 = item_1 + item_2;
console.log(item_3);

const item_4 = "Hello World";
console.log(item_4);

console.log(item_3 + item_4);

console.log(item_3 * item_4);

const item_5 = item_3;

const item_6 = 15;
const item_6_type = typeof(item_6);
console.log("item_6 == ",item_6, "item_6_type == ",item_6_type);

const item_7 = String(item_6);
const item_7_type = typeof(item_7);
console.log("item_7 == ",item_7, "item_7_type == ",item_7_type);


const n = 1;
    //Число от 1 до 9 
    if (n > 9 || n < 1) {
    console.log('Значение должно быть в пределах от 1 до 9');    
    } 
    // Вывести сумму n + nn + nnn, где значения nn и nnn - результат конкатенации n 
    else {
            const nn = Number(String(n) + n);
            const nnn = Number(String(n) + n + n);
            const cont_summ = n + nn + nnn;
            console.log(cont_summ);
    } 