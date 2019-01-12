let readlineSync = require("readline-sync");
const fs = require("fs");
console.log("Введите число циклов")
let length = readlineSync.question();
let data = new Array(parseInt(length));
fs.writeFileSync("data.txt", ``);
let questions={ title:"Название фирмы? ",use:"Для чего используется? ",price:"Сколько стоит? ",_import:"Ипортный товар? "};
for(let i=0;i<length;i++){
    let answers={};
    for (let question in questions){
        console.log(questions[question]);
        let answer = readlineSync.question();
        answers[question]=answer;
    }


    if((i+1) < length ){
        fs.appendFileSync("data.txt",`${JSON.stringify(answers)}\n`);
    } else {
        fs.appendFileSync("data.txt",`${JSON.stringify(answers)}`);
    }

}



let array = fs.readFileSync('data.txt').toString().split("\n");
let min = Math.min( ...array.map(data => {
    data =JSON.parse(data)
    return Number(data.price)
}));
let filterData = array.filter(data =>{
    data = JSON.parse(data)
    return Number(data.price) === min})
filterData = JSON.parse(filterData);
let {title, price} = filterData
console.log("самое дешевое средсвто для лица стоит " + price + " рублей");
console.log("От фирмы: " ,title);


