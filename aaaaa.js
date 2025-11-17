// 1
// function getNumbers() {
//     let arr = [];
//     for (let i = 1; i <= 5; i++) {
//         let num = Number(prompt("Enter number " + i + ":"));
//         arr.push(num);
//     }
//     return arr;
// }
// function printReverse(numbers) {
//     console.log("Numbers in reverse order:");
//     for (let i = numbers.length - 1; i >= 0; i--) {
//         console.log(numbers[i]);
//     }
// }
// let nums = getNumbers();
// printReverse(nums);

// 2
// function getNumbers() {
//     let arr = [];
//     for (let i = 1; i <= 5; i++) {
//         let num = Number(prompt("Enter number " + i + ":"));
//         arr.push(num);
//     }
//     return arr;
// }
// function printReverse(arr) {
//     console.log("Numbers in reverse order:");
//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i]);
//     }
// }
// let numbers = getNumbers();
// printReverse(numbers);
//3
// let dogs = [];
// let d1 = prompt("Enter dog name 1:");
// let d2 = prompt("Enter dog name 2:");
// let d3 = prompt("Enter dog name 3:");
// let d4 = prompt("Enter dog name 4:");
// let d5 = prompt("Enter dog name 5:");
// let d6 = prompt("Enter dog name 6:");
// dogs.push(d1);
// dogs.push(d2);
// dogs.push(d3);
// dogs.push(d4);
// dogs.push(d5);
// dogs.push(d6);
// dogs.sort();
// let rev = [];
// rev.push(dogs[5]);
// rev.push(dogs[4]);
// rev.push(dogs[3]);
// rev.push(dogs[2]);
// rev.push(dogs[1]);
// rev.push(dogs[0]);
// let text = "<ul>";
// text += "<li>" + rev[0] + "</li>";
// text += "<li>" + rev[1] + "</li>";
// text += "<li>" + rev[2] + "</li>";
// text += "<li>" + rev[3] + "</li>";
// text += "<li>" + rev[4] + "</li>";
// text += "<li>" + rev[5] + "</li>";
// text += "</ul>";
// document.body.innerHTML += text;

// 4
// let nums = [];
// while (true) {
//     let n = Number(prompt("Enter a number (0 to stop):"));
//     if (n === 0) {
//         break;
//     }
//     nums.push(n);
// }
// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[j] > nums[i]) {
//             let temp = nums[i];
//             nums[i] = nums[j];
//             nums[j] = temp;
//         }
//     }
// }
// console.log("Numbers from largest to smallest:");
// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
// }
// 5
// function alreadyGiven(arr, number) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === number) {
//             return true;
//         }
//     }
//     return false;
// let numbers = [];
// let stop = false;
// while (!stop) {
//     let input = prompt("Enter a number:");
//     if (input === null) { break; }
//     let num = Number(input);
//     if (alreadyGiven(numbers, num)) {
//         console.log("The number " + num + " has already been given!");
//         stop = true;
//     } else {
//         numbers.push(num);
//     }
// }
// numbers.sort(function(a, b) {
//     return a - b;
// });
// console.log("All numbers in ascending order:");
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// 6
// function rollDice() {
//     let number = Math.floor(Math.random() * 6) + 1;
//     return number;
// }
// function printResults(arr) {
//     let ul = document.createElement("ul");
//     for (let i = 0; i < arr.length; i++) {
//         let li = document.createElement("li");
//         li.textContent = "Roll " + (i + 1) + ": " + arr[i];
//         ul.appendChild(li);
//     }
//     document.body.appendChild(ul);
// }
// let rolls = [];
// let result = 0;
// while (result !== 6) {
//     result = rollDice();
//     rolls.push(result);
// }
// printResults(rolls);
// 7
// function rollDice(sides) {
//     let x = Math.random() * sides;
//     let y = Math.floor(x);
//     let z = y + 1;
//     return z;
// }
// function showList(arr) {
//     let ul = document.createElement("ul");
//     for (let i = 0; i < arr.length; i++) {
//         let li = document.createElement("li");
//         li.textContent = "Roll " + (i + 1) + ": " + arr[i];
//         ul.appendChild(li);
//     }
//     document.body.appendChild(ul);
// }
// let input = prompt("How many sides your dice have?");
// let sides = Number(input);
// let rolls = [];
// let number = 0;
// while (number !== sides) {
//     number = rollDice(sides);
//     rolls.push(number);
// }
// showList(rolls);
// 8
// function concat(arr) {
//     let result = "";
//     for (let i = 0; i < arr.length; i++) {
//         result = result + arr[i];
//     }
//     return result;
// }
// let names = ["Johnny", "DeeDee", "Joey", "Marky"];
// let finalText = concat(names);
// let p = document.createElement("p");
// p.textContent = finalText;
// document.body.appendChild(p);
//9
// function even(arr) {
//     let newArr = [];
//     let i = 0;
//     while (i < arr.length) {
//         let number = arr[i];
//         let remainder = number % 2;
//         if (remainder === 0) {
//             newArr.push(number);
//         }
//         i = i + 1;
//     }
//     return newArr;
// }
// let original = [2, 7, 4, 9, 12, 15, 20];
// let evens = even(original);
// console.log("Original array:");
// console.log(original);
// console.log("Even numbers array:");
// console.log(evens);
// 10
// function makeCandidates(count) {
//     let list = [];
//     let i = 0;
//     while (i < count) {
//         let name = prompt("Name for candidate " + (i + 1));
//         let obj = {
//             name: name,
//             votes: 0
//         };
//         list.push(obj);
//         i = i + 1;
//     }
//     return list;
// }
// function voteForCandidate(arr, candidateName) {
//     let i = 0;
//     let found = false;
//     while (i < arr.length) {
//         if (arr[i].name === candidateName) {
//             arr[i].votes = arr[i].votes + 1;
//             found = true;
//         }
//         i = i + 1;
//     }
//
//     return found;
// }
// function sortByVotes(arr) {
//     arr.sort(function(a, b) {
//         return b.votes - a.votes;
//     });
// }
// let candidateCountInput = prompt("How many candidates?");
// let candidateCount = Number(candidateCountInput);
// let candidates = makeCandidates(candidateCount);
// let voterCountInput = prompt("How many voters?");
// let voterCount = Number(voterCountInput);
// let v = 0;
// while (v < voterCount) {
//     let voteName = prompt("Voter " + (v + 1) + ": Who do you vote for?");
//     if (voteName !== null && voteName !== "") {
//         let ok = voteForCandidate(candidates, voteName);
//     }
//     v = v + 1;
// }
// sortByVotes(candidates);
// let winner = candidates[0];
// console.log("Winner is " + winner.name + " with " + winner.votes + " votes.");
// console.log("results:");
// let x = 0;
// while (x < candidates.length) {
//     console.log(candidates[x].name + ": " + candidates[x].votes + " votes");
//     x = x + 1;
// }







