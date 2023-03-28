// console.log("hi");

//모든 버튼을 buttons 변수로 저장
const buttons = document.querySelectorAll("button");

//0~2 숫자로 result배열에서 결과 출력 가능
const result = ['가위', '바위', '보'];
//math.floor을 사용하여 난수의 정수값을 구하고, math.random*3을 통해 최대값이 3인 랜덤숫자를 출력
//컴퓨터 결과 vs 나의 선택
game = (e) => {
  const randomIndex = Math.floor(Math.random()*3);
  const myChoice = e.target.id;
  const computer = result[randomIndex];
  console.log(computer, myChoice);
};

//버튼을 누를 때마다 forEach method로 buttons배열순회반복하여 버튼 내 text를 콘솔창에 출력
buttons.forEach((button) => {
  button.addEventListener("click", game);
});


