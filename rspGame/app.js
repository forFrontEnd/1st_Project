// console.log("hi");

//모든 버튼을 buttons 변수로 저장
const buttons = document.querySelectorAll("button");
//버튼을 누를 때마다 forEach method로 buttons배열순회반복하여 버튼 내 text를 콘솔창에 출력
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.innerText);
  });
});
