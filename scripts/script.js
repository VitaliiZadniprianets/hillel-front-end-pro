let userName = prompt("Please enter your name:")  || "anonym";

let greeting = (userName === "admin" && "Hello admin") || "Welcome";

alert(greeting);
