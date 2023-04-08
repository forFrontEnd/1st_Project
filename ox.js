const questions = [
	{ question: "1 + 1 = 2", answer: "o" },
	{ question: "10 * 10 = 1000", answer: "x" },
	{ question: "수박은 과일이다.", answer: "o" },
	{ question: "서울은 한국의 수도이다.", answer: "o" },
	{ question: "바나나는 빨간색이다.", answer: "x" }
];

let currentQuestion = 0;
let correctAnswers = 0;

const questionElement = document.getElementById("question");
const leftElement = document.getElementById("left");
const rightElement = document.getElementById("right");
const correctElement = document.getElementById("correct");


function showQuestion() {
	questionElement.innerText = questions[currentQuestion].question;
}


function checkAnswer(answer) {
	if (answer === questions[currentQuestion].answer) {
		correctAnswers++;
		correctElement.innerText = correctAnswers;
	}
	currentQuestion++;

	
	if (currentQuestion === questions.length) {
		alert(`맞힌 문제 수: ${correctAnswers}`);
		currentQuestion = 0;
		correctAnswers = 0;
		correctElement.innerText = correctAnswers;
	}
	showQuestion();
}


showQuestion();

