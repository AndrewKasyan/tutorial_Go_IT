const apples = 47;
const grapes = 135;
const total = Number(apples) + Number(grapes);
console.log("tolal", total);
const diff = Number(grapes) - Number(apples); 
console.log("diff", diff);
let students = 100;
students += 50;
console.log("students", students);
const value = 27.5;
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value));
const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(message);
let weight = '88.3';
let height = '1,75';
const normalizedWeight = Number(weight.replace(",", "."));
const normalizedHeight = Number(height.replace(",", "."));
const bmi = (normalizedWeight / normalizedHeight**2).toFixed(1);
console.log("BMI", bmi)