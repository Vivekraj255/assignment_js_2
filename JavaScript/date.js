function myFunction() {
let date = document.getElementById("date");
let time = document.getElementById("time");
let newDate = new Date();
let year = newDate.getFullYear();
let month = newDate.getMonth();
let todaySDate = newDate.getDate();
let hours = newDate.getHours();
let minutes = newDate.getMinutes();
let seconds = newDate.getSeconds();
date.innerHTML = " " + todaySDate + "/ " + month + "/ " + year;
time.innerHTML = hours + ": " + minutes + ": " + seconds;
 }