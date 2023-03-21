// Отримання анкетних данних від користувачів
let userFirst = prompt("Введіть анектні дані про першого студента у такому порядку : xx років ім'я та прізвище студента");
let userSecond = prompt("Введіть анектні дані про другого студента у такому порядку : xx років ім'я та прізвище студента");
let userThird =  prompt("Введіть анектні дані про третього студента у такому порядку : xx років ім'я та прізвище студента");

// Обчислення середнього віку
const averageAge = (parseInt(userFirst) + parseInt(userSecond) + parseInt(userThird)) / 3;

// для зручності  створив 
spaceBetween = '\n' + '\n';

// консоль
console.log('**************' ,spaceBetween,
'Список студентів, що зареєструвалися на вебінар :',spaceBetween, 
'1.' ,userFirst, spaceBetween,
'2.' ,userSecond, spaceBetween,
'3.' ,userThird, spaceBetween,
'--------------' ,spaceBetween,
'Середній вік студента :',averageAge, spaceBetween,
'--------------' ,spaceBetween,
'**************' );


