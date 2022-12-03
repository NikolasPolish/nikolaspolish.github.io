"use strict"

// let sum = 0, days = 0;

// function calc(){
// let site = prompt("Какой тип сайта ты хочешь? 1 - Сайт визитка. 2 - Многостраничный сайт.");
// if(site =="1"){
//     sum += 1000;
//     days += 10;
// }else if(site == "2"){
//     sum += 2000;
//     days += 15;
// }else {
//     alert("Вы ввели что-то не то")
//     calc();
// }

// let design = prompt("Какой дизайн сайта ты хочешь? 1 - Шаблон. 2 - Уникальный.");

// if(site =="1"){
//     sum += 3000;
//     days += 10;
// }else if(site == "2"){
//     sum += 4000;
//     days += 15;
// }else {
//     alert("Вы ввели что-то не то")
//     calc();
// }

// let adaptive = prompt("Какую адаптивность сайта ты хочешь? 1 - Только ПК. 2 - ПК + Мобильный.");

// if(site =="1"){
//     sum += 5000;
//     days += 10;
// }else if(site == "2"){
//     sum += 6000;
//     days += 15;
// }else {
//     alert("Вы ввели что-то не то")
//     calc();
// }
// alert("Скроки : "+days+ " Цена : "+sum);
// }
// calc();





let site, design, adaptive;

let calculator = {
    price : [
        [100, 500,],
        [500, 1000,],
        [1000, 2000,],
    ],
    days : [
        [1, 2, 3],
        [3, 2, 4],
        [1, 5, 6],
    ],
    run(siteType,designType,adaptiveType){
       let sum = parseInt(calculator.price[0][siteType-1]) + parseInt(calculator.price[1][designType-1]);
       let days = parseInt(calculator.days[0][siteType-1]) + parseInt(calculator.days[1][designType-1]);
       alert("Скроки : "+ days + " Цена : "+ sum);
    }
}

function getAnswers(){
site = prompt("Какой тип сайта ты хочешь? 1 - Сайт визитка. 2 - Многостраничный сайт.");
  if(site !=1 && site !=2){
    alert("Вы ввели что-то не то");
    getAnswers();
    return;
  }
design = prompt("Какой дизайн сайта ты хочешь? 1 - Шаблон. 2 - Уникальный.");
if(design !=1 && design !=2){
    alert("Вы ввели что-то не то");
    getAnswers();
    return;
  }
adaptive = prompt("Какую адаптивность сайта ты хочешь? 1 - Только ПК. 2 - ПК + Мобильный.");
if(adaptive !=1 && adaptive !=2){
    alert("Вы ввели что-то не то");
    getAnswers();
    return;
  }
  calculator.run(site,design,adaptive);
}

getAnswers();