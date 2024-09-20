const salary = 1000;
if (salary >= 1000) {
    console.log("middle");
} else {
    console.log("junior");
}



const minAge = 18;
const maxAge = 60;
const age = 61;
// Проверка на number
if (Number.isFinite(age) === false) {
    console.log("Incorrect data type");
}
// Проверки на соответствие возраста age минимальному minAge и максимальному maxAge значениям 
if (age < minAge) {
    console.log(`You don\'t have access cause your age is ${age} It's less then ${minAge}`);
} else if (age >= minAge && age < maxAge) {
    console.log("Welcome !");
} else if (age > maxAge) {
    console.log("Keep calm and look Culture channel");
} else {
    console.log("Technical work");
}