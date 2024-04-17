// if (222 === "222") {
// 	document.write("If сработал.");
// } else {
// 	document.write("условие не верное - сработал ELSE");
// }

/*if (77 > 88) {
	document.write("сработал первый -- if");
} else if (221 > 22221) {
	document.write("сработал второй -- if (221 > 21");
} else if (2 > 122) {
	document.write("сработал третий -- if (2 > 1");
} else if (1 == 12) {
	document.write("сработал четвёртый -- if (1 == 1");
} else if (333 > 3321) {
	document.write("сработал пятый -- if (333 > 331");
} else {
	document.write("всё сломалось ВПЕНЬ. Показываем - ELSE");
}
*/

/**********************Тернарный оператор

const age = 35;

age > 117
	? document.write("Скоро стану старым гномом")
	: document.write("Я молодой гном");
 */

// document.write(Math.floor(Math.random() * 100));

const chooseCar = prompt(
	"Введите вашу любиму марку авто",
	"Любимая марка авто"
);
const userName = prompt("Ввeдите ваше имя", "Ваше имя");

const randomPercent = Math.floor(Math.random() * 100);

document.write(
	`Совместимость Имени - ${userName} с маркой авто ==>> ${chooseCar} = ${randomPercent}%`
);

/**
const chooseCar = prompt(
"Введите вашу любиму марку авто",
         "Любимая марка авто"
      );
      const userName = prompt("Ввeдите ваше имя", "Ваше имя");

      const randomPercent = Math.floor(Math.random() * 100);

      document.write(
         `Совместимость Имени - ${userName} с маркой авто ==>> ${chooseCar} = ${randomPercent}%`
);
*/

console.log(Math.floor(Math.random() * 100));
