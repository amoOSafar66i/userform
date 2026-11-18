// // let number = Number(prompt("number"));

// // function fizzBuzz() {
// //     if (number % 3 === 0 && number % 5 === 0) {
// //         console.log("FizzBuzz");
// //     } else if (number % 3 === 0) {
// //         console.log("Fizz");
// //     } else if (number % 5 === 0) {
// //         console.log("Buzz");
// //     } else {
// //         console.log(number);
// //     }
// // }

// // fizzBuzz();
// // let hamburger = document.querySelector(".hamburger");
// // let menu = document.querySelector(".menu");

// // hamburger.addEventListener("click", function () {
// //   menu.classList.toggle("show");
// // });
// // let hamburger = document.getElementById("hamburger");
// // let menu = document.getElementById("menu");

// // hamburger.addEventListener("click", function () {
// //   menu.classList.toggle("active");
// // }); 
// const systemRandomNumber = Math.floor(Math.random() * 100);
// console.log(systemRandomNumber);

// const guessForm = document.querySelector("#guessForm");
// const resultText = document.querySelector(".result");
// const hpElement = document.querySelector(".hp");

// let userHp = 10;

// function getUserGuess(e) {
//     const userGuess = e.target.userGuess.value;

//     if (userGuess > systemRandomNumber) {
//         resultText.innerHTML = "your number is bigger than answer";
//     } else if (userGuess < systemRandomNumber) {
//         resultText.innerHTML = "your number is smaller than answer";
//     } else if (userGuess == systemRandomNumber) {
//         resultText.innerHTML = "you win";
//     } else {
//         resultText.innerHTML = "invalid answer";
//     }
// }

// guessForm.addEventListener("submit", (e) => {
//     if (userHp <= 1) {
//         resultText.innerHTML = "you lose";
//         return;
//     } else {
//         getUserGuess(e);
//     }

//     userHp--;
//     hpElement.innerHTML = userHp;
//     guessForm.reset();
//     e.preventDefault();
// // });
// const systemRandomNumber = Math.floor(Math.random() * 100);
// console.log(systemRandomNumber);

// const guessForm = document.querySelector("#guessForm");
// const resultText = document.querySelector(".result");
// const hpElement = document.querySelector(".hp");

// let userHp = 10;

// function getUserGuess(e) {
//     const userGuess = Number(e.target.userGuess.value);

//     if (userGuess > systemRandomNumber) {
//         resultText.innerHTML = "Your number is bigger than answer";
//     } else if (userGuess < systemRandomNumber) {
//         resultText.innerHTML = "Your number is smaller than answer";
//     } else {
//         resultText.innerHTML = "You win!";
//     }
// }

// guessForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     if (userHp <= 0) {
//         resultText.innerHTML = "You lose!";
//         return;
//     }

//     getUserGuess(e);

//     userHp--;
//     hpElement.innerHTML = userHp;

//     guessForm.reset();
// });
// const menu = document.querySelector(".menu");
// menu.addEventListener("click", () => {
//  console.log("cliced");





// menu.classList.toggle("active")


// let hourEl = document.querySelector(".hour");
// let minuteEl = document.querySelector(".min");
// let secondEl = document.querySelector(".sec");
// let dateEl = document.querySelector(".date");

// setInterval(() => {

//     const now = new Date();

//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();

//     const day = now.getDate();
//     const month = now.getMonth() + 1;
//     const year = now.getFullYear();

//     hourEl.innerHTML = String(hours).padStart(2, "0");
//     minuteEl.innerHTML = String(minutes).padStart(2, "0");
//     secondEl.innerHTML = String(seconds).padStart(2, "0");

//     dateEl.innerHTML = year + " / " + month + " / " + day;

// }, 1000);
// let products = [
//     { name: "Laptop", price: 30000000, available: true },
//     { name: "Mouse", price: 500000, available: true },
//     { name: "Keyboard", price: 1200000, available: false },
//     { name: "Monitor", price: 8000000, available: true },
//     { name: "Headphone", price: 2000000, available: false }
// ];

// let totalPrice = 0;

// products.forEach(product => {
//     totalPrice += product.price;
// });

// console.log("Total Price:", totalPrice);

// let discount = totalPrice * 0.20;

// console.log("Discount:", discount);

// console.log("Final Price:", totalPrice - discount);

// let availableProducts = products.filter(product => {
//     return product.available === true;
// });


// let productNames = availableProducts.map(product => {
//     return product.name;
// });

// console.log("Available Products:", productNames);
// let products = [
//     { id: 1, name: "Laptop", price: 30000000, available: true },
//     { id: 2, name: "Mouse", price: 500000, available: true },
//     { id: 3, name: "Keyboard", price: 1200000, available: false },
//     { id: 4, name: "Monitor", price: 8000000, available: true },
//     { id: 5, name: "Headphone", price: 2000000, available: false }
// ];


// let totalPrice = products.reduce((sum, product) => {
//     return sum + product.price;
// }, 0);

// console.log("Total Price:", totalPrice);


// let discount = totalPrice * 0.20;

// console.log("Discount:", discount);


// let finalPrice = totalPrice - discount;

// console.log("Final Price:", finalPrice);

// let availableProducts = products.filter(product => {
//     return product.available === true;
// });


// let productNames = availableProducts.map(product => {
//     return product.name + " : " + product.price;
// });

// // console.log("Available Products:", productNames);
// function register() {

//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;

//     if (username !== "" && password !== "") {

//         console.log("Hello " + username);

//         alert("Register Successful!");

//     } else {

//         alert("Please fill all fields!");

//     }

// }
const userForm = document.querySelector("#userForm");
const users = [];

userForm.addEventListener("submit", (e) => {

    const newUser = {
        fullName: e.target.fullName.value,
        age: e.target.age.value,
        password: e.target.password.value,
    };

    users.push(newUser);

    sayHello(users);

    e.preventDefault();
});

function sayHello(list) {
    list.forEach((user) => {
        console.log("Hi.wellcom " + user.fullName);
    });
}