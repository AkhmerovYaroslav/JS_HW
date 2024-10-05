/* Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1
*/


function getNumSmallerThan9(num) {
    if (num < 10) {                                         // Проверка на число, состоящее более чем из одной цифры
        return num;
    } else { 
        const digitsOfNum = num.toString().split('');       // Разбиваем на строку и приводим к массиву
        let sumOfDigits = 0;                                    
        for (let i = 0; i < digitsOfNum.length; i++) {      
            sumOfDigits += +digitsOfNum[i];                 // Складываем цифры числа
        }
        if (sumOfDigits >= 9) {                             // Если результат меньше 9 запускам рекурсию
            return getNumSmallerThan9(sumOfDigits);
        }  
        else {
            return sumOfDigits;                             
        }
    }
}

console.log(getNumSmallerThan9(19));

nowReduce();



function getNumSmallerThan9ButReduce(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((sumOfDigits, digitOfNum) => sumOfDigits + +digitOfNum, 0);
    }   
    return num;
}


console.log(getNumSmallerThan9ButReduce(19));




















function nowReduce () {
    console.log("\n====================================== А ТЕПЕРЬ ЧЕРЕЗ .reduce ========================================\n");
}