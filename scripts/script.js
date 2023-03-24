alert ("Начало");

const whoISCome = prompt("Кто пришел ?") ;

if ( whoISCome === null) {
    alert ("Вход отменен") ;
}
else if (whoISCome === "Админ") {
    const password = prompt("Пароль ?") ;
    
    if (password === null) {
        alert ("Вход отменен") ;
    }

    else if (password === "Черный Властелин") {
        alert ("Добро пожаловать !") ;
    }
else {
    alert ("Пароль неверен") ;
}
}
else {
    alert ("Я вас не знаю") ;
}
