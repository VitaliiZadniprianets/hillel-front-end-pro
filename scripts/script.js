const space = '<br>';

/* 1. Вивести на сторінку в один рядок через кому числа від 10 до 20. */
document.write('1. Вивести на сторінку в один рядок через кому числа від 10 до 20.' + space);
 const maxNumber1 = 20 ;
for (let i = 10; i<=maxNumber1; i++) {
if (i<maxNumber1) {
    document.write(i + ', ')
}
else {
    document.write(i + '.' )
}
} ;

/* 2. Вивести квадрати чисел від 10 до 20. */
document.write(space + space + '2. Вивести квадрати чисел від 10 до 20.' + space);
const maxNumber2 = 20 ;
for (let i = 10 ; i<= maxNumber2; i++) {
    if (i < maxNumber2) {
        document.write(i + '<sup>2</sup> = ' + i * i + ', ')
    }
    else {
        document.write(i + '<sup>2</sup> = ' + i * i + '.')
    }
};

/* 3. Вивести таблицю множення на 7. */
document.write(space + space + '3. Вивести таблицю множення на 7.' + space);
const maxNumber3 = 9 ;
for (let i = 1 ; i<= maxNumber3; i++) {
    if (i < maxNumber3) {
    document.write('7' + '*'+ i + ' = ' + 7 * i + space ) 
}
else {
    document.write('7' + '*'+ i + ' = ' + 7 * i )
}
};

/* 4. Знайти суму всіх цілих чисел від 1 до 15. */
document.write(space + space + '4. Знайти суму всіх цілих чисел від 1 до 15.' + space);
let sum_Of_Integers_Whole_Numbers = 0 ;
for (let i = 1 ; i<= 15; i++) {
    sum_Of_Integers_Whole_Numbers += i ;
};
document.write("Сума всіх цілих чисел = " + sum_Of_Integers_Whole_Numbers) ;

/* 5. Знайти добуток усіх цілих чисел від 15 до 35. */
document.write(space + space + '5. Знайти добуток усіх цілих чисел від 15 до 35.' + space);
let product_Of_Integers_Whole_Numbers = 1 ;
for (let i = 15 ; i<= 35; i++) {
    product_Of_Integers_Whole_Numbers *= i ;
} ;
document.write ("Добуток усіх цілих чисел = " + product_Of_Integers_Whole_Numbers) ;

/* 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500. */
document.write(space + space + '6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.' + space);
let = averageNumbers = 0 ;
const maxNumber4 = 500 ;
for (let i = 1 ; i<= maxNumber4; i++) {
averageNumbers += i ;
}
document.write("Середнє арифметичне всіх цілих чисел від 1 до 500 = " + averageNumbers / maxNumber4 ) ;

/* 7. Вивести суму лише парних чисел в діапазоні від 30 до 80. */
document.write(space + space + '7. Вивести суму лише парних чисел в діапазоні від 30 до 80.' + space);
let totalEven = 0 ;
for (let i = 30 ; i <= 80 ; i ++) {
    if (i % 2 === 1) continue ;
    totalEven += i;    
};
document.write("Сума парних чисел в діапазоні від 30 до 80 = " + totalEven) ;

/* 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3. */
document.write(space + space + '8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.'+ space);
const maxNumber5 = 200 ;
for (let i = 100 ; i <= maxNumber5 ; i ++) {
    if (!(i % 3))  {
    document.write(i + " ")
}
};

/* 12. Надрукувати повну таблицю множення від 1 до 10. */
document.write(space + space + '12. Надрукувати повну таблицю множення від 1 до 10.' + space);
for (let i = 1 ; i<= 10; i++) {
    for (let j = 1 ; j <= 10 ; j++) {
        const result = i * j ;
        document.write(i + "*" + j + "=" + result + space );
    }
};

/* 9-11. Дано натуральне число. Знайти та вивести на сторінку всі його дільники. Визначити кількість його парних дільників. Знайти суму його парних дільників. */
document.write (space + space + '9-11. Дано натуральне число. Знайти та вивести на сторінку всі його дільники. Визначити кількість його парних дільників. Знайти суму його парних дільників.' + space) ;
let num = prompt("Введіть натуральне число:");
let count = 0;
let sum = 0;
let validRange = !isNaN(num) ;

if (validRange) {
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {  
          document.write( i + ',');    
          if (i % 2 === 0) {  
            count++;          
            sum += i;         
          }
        }
      } 
      
      document.write(space +"Кількість парних дільників: " + count);
      document.write(space +"Сума парних дільників: " + sum);
      
      } else { 
          document.write ("Input Wrong . Введіть натуральне число");
      };