// №1
// Задать температуру в градусах по Цельсию.
// Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
// Подсказка: 
// расчет идет по формуле Tf = (9 / 5) * Tc + 32,
// где Tf — температура по Фаренгейту, Tc — по Цельсию.


tc = prompt('Сколлько градусов?');
tf = (9 / 5) * tc + 32;

alert(tf)

// №2
// Объявить две переменные: admin и name. 
// Записать в name строку "Василий"; Скопировать значение из name в admin. 
// Вывести admin (должно вывестись «Василий»).

let admin, name;

name = 'Василий';
admin = name;

alert(admin);

// №3
// * Чему будет равно JS-выражение 1000 + "108"?
alert(1000 + '108')
// Происходит конкатенация, посредством автоматического преоброзование int в str

