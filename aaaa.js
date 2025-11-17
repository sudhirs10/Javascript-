// 1
// let numbers = [];
// for (let i = 0; i < 5; i++) {
//     let num = prompt("Enter number " + (i + 1) + ":");
//     numbers.push(num);
// }
// console.log("Numbers in reverse order:");
// for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(numbers[i]);
// }

//2
// let count = prompt("How many participants?");
// let names = [];
// for (let i = 0; i < count; i++) {
//     let name = prompt("Enter name " + (i + 1) + ":");
//     names.push(name);
// }
// names.sort();
// let list = "<ol>";
//
// for (let i = 0; i < names.length; i++) {
//     list += "<li>" + names[i] + "</li>";
// }
// list += "</ol>";
// document.body.innerHTML += list;

//3
// let dogs = [];
// for (let i = 1; i <= 6; i++) {
//     let name = prompt("Enter dog name " + i + ":");
//     dogs.push(name);
// }
// dogs.sort();
// let reversed = [];
// for (let i = dogs.length - 1; i >= 0; i--) {
//     reversed.push(dogs[i]);
// }
// let list = "<ul>";
// for (let i = 0; i < reversed.length; i++) {
//     list += "<li>" + reversed[i] + "</li>";
// }
// list += "</ul>";
// document.body.innerHTML += list;
//4
// let nums = [];
// while (true) {
//     let n = Number(prompt("Enter a number (0 to stop):"));
//     if (n === 0) {
//         break;
//     }
//     nums.push(n);
// }
// nums.sort(function(a, b) {
//     return a - b;
// });
// console.log("Numbers from large to small:");
// for (let i = nums.length - 1; i >= 0; i--) {
//     console.log(nums[i]);
// }
//5
// let numbers = [];
// while (true) {
//     let n = Number(prompt("Give a number:"));
//     let already = false;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === n) {
//             already = true;
//         }
//     }
//     if (already === true) {
//         console.log("Number already given!");
//         break;
//     }
//     numbers.push(n);
// }
// for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//         if (numbers[j] < numbers[i]) {
//             let temp = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = temp;
//         }
//     }
// }
// console.log("Numbers in ascending order:");
// for (let i = 0; i < numbers.length; i++) {
//     console.log(number[i]);
//6
// function rollDice() {
//     let r = Math.random();      // random between 0 and 1
//     let num = Math.floor(r * 6) + 1; // make it 1-6
//     return num;
// }
//
// let text = "<ul>";
// while (true) {
//     let value = rollDice();
//
//     text += "<li>" + value + "</li>";
//     if (value === 6) {
//         break;
//     }
// }
// text += "</ul>";
// document.body.innerHTML += text;
//7
//     let r = Math.random();      // random between 0 and 1
//     let num = Math.floor(r * 6) + 1; // make it 1-6
//     return num;
// }
// let text = "<ul>";
// while (true) {
//     let value = rollDice();
//     text += "<li>" + value + "</li>";
//     if (value === 6) {
//         break;
//     }
// }
// text += "</ul>";
// document.body.innerHTML += text;
//8
// function concat(arr) {
//     let result = "";
//     for (let i = 0; i < arr.length; i++) {
//         result = result + arr[i];
//     }
//     return result;
// }
// let names = ["Johnny", "DeeDee", "Joey", "Marky"];
// let finalText = concat(names);
// document.body.innerHTML = finalText;
// 9
// function even(arr) {
//     let evens = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evens.push(arr[i]);
//         }
//     }
//
//     return evens;
// }
// let numbers = [2, 7, 4, 9, 12, 5];
// let evenNumbers = even(numbers);
// console.log("Original array:");
// console.log(numbers);
// console.log("Even numbers array:");
// console.log(evenNumbers);

