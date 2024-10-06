/*
  У вас есть массив названий пицц вашего конкурента. Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и выводить в консоль только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вывести в консоль null.
  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Пиццы конкурента:
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

const myPizzas = ['Пепперони', 'Капричоза', 'Diablo', '4 Сыра', 'Гавайская'];
// const myPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

const pizzasOnlyIHave = [];



for (let i = 0; i < myPizzas.length; i++) {
    const myPizza = myPizzas[i].toLowerCase();                         // Все мои пиццы в нижний регистр
    let duplicatPizzas = false;                                        // Задаем проверку на дублирующиеся пиццы

    for (let i = 0; i < competitorPizzas.length; i++) {
        const competitorPizza = competitorPizzas[i].toLowerCase();     // Все пиццы конкурента в нижний регистр
        if (myPizza === competitorPizza) {                             // Проверяем на наличие дублирующихся пицц
            duplicatPizzas = true;                                     
            break;
        }
    }

    if (!duplicatPizzas) {
        PizzasOnlyIHave.push(myPizzas[i]);                             // Добавляем не дубрилующиеся в новый массив                         
    }
}
    if (PizzasOnlyIHave.length > 0) {                                  // Если таких нет, то выводим null
        console.log(PizzasOnlyIHave);
    } else {
        console.log(null);
    }                                                                  




