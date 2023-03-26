const space = '<br>';

/* 1. Вивести на сторінку в один рядок через кому числа від 10 до 20. */
document.write('1: Вивести на сторінку в один рядок через кому числа від 10 до 20.' + space);
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
document.write(space + space + '2: Вивести квадрати чисел від 10 до 20.' + space);
