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