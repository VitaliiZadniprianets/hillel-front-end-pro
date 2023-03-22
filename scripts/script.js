//Завдання №2 

let login = prompt("Please enter your login:");
let password = prompt("Please enter your password:");
let age = prompt("Please enter your age:");

(login && password) && alert("Welcome");
(login === '' || password === '') && alert("Login or password incorrect"); 

(login === '' && password === '') && alert("Login and password are required"); 
(login === '' && password) && alert("Login required"); 
(login && password === '') && alert("Password are required"); 
(login && password) && alert("Welcome");

alert((age >= 18 && age <= 28 && 'Hello') || 'Goodbay');

