let words = ["компьютер", "монитор", "окно", "телефон", "машина", "клавиатура"];

function getWord() {
	let word = words[Math.floor(Math.random() * words.length)];
	return word;
}

let playWord = getWord();

let letters = playWord.split("");

for(let i=0;i<letters.length;i++) {
	let inp = document.createElement("input");
	inp.setAttribute("data-letter", letters[i]);
	document.querySelector(".word").append(inp);
}

let changeLetter = document.querySelectorAll(".word input");

let errors = 0;

for(let i=0;i<changeLetter.length;i++) {
	changeLetter[i].addEventListener("keypress", function(e) {
		if(e.charCode == 13) {
			let dataLetter = changeLetter[i].getAttribute("data-letter");
			let valueLetter = changeLetter[i].value;
			if(dataLetter == valueLetter) {
				changeLetter[i].value = valueLetter;
			}
			else {
				changeLetter[i].value = "";
				errors++;
				document.querySelector(".img img").setAttribute("src","img/Hangman-"+errors+".png");
			}
		}
	});
}

// 1. Сделать поле из 9-16 клеток
// 2. Случайно запрятать в одну из клеток клад
// 3. При клике на клетку открывать поле
// 4. Если нашли клад, то выводится сообщение что выиграли
// 5. Всего 5-6 попыток(выводить на экране сколько осталось попыток)
// 6. Если попытки закончились, вывести Game over