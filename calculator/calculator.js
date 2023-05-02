const button = document.querySelector('.calculator_buttons');
const display = document.querySelector('.display');

let firstNum = '0';
let secondNum = '0';
let operator = '';
let secondOperator = '';

// 계산 함수
function calculate() {
    let result;
    // 결과 firstNum에 넣음
    switch (operator) {
        case '+':
            result = Number(firstNum) + Number(secondNum);
            firstNum = result;
            break;
        case '-':
            result = Number(firstNum) - Number(secondNum);
            firstNum = result;
            break;
        case 'x':
            result = Number(firstNum) * Number(secondNum);
            firstNum = result;
            break;
        case '÷':
            result = Number(firstNum) / Number(secondNum);
            firstNum = result;
            break;
        case '%':
            result = Number(firstNum) % Number(secondNum);
            firstNum = result;
            break;
    }
    // secondNum 초기화
    secondNum = '';
}

// 플러스 마이너스 기호 변환 함수
function PlusOrMinus(whatNum) {
    if (whatNum.slice(0, 1) == '-') {
        whatNum = whatNum.substring(1);
        console.log(whatNum);
        if (whatNum.length == 0) display.textContent = '0';
        else display.textContent = whatNum;
    } else {
        whatNum = '-' + whatNum;
        if (whatNum.length == 1) display.textContent = whatNum + '0';
        else display.textContent = whatNum;
    }
    return whatNum;
}

button.addEventListener('click', function (e) {
    // event.target => 현재 이벤트가 발생한 요소의 속성 얻음
    const targetButton = e.target;
    const targetList = targetButton.classList[0]; // 가장 첫번째 class 들고 오기
    // .innerText = 공백 제거, .textContent = 그대로, .innerHTML = HTML 양식 그대로
    // 텍스트를 엘리먼트에 추가하는 경우 => .innerText 사용
    const targetContent = targetButton.textContent; // text 들고 오기

    /* 1 number 클릭 시 */
    // -0 일 때 0이 삭제되지 않는 이슈 해결하기 : 해결
    // 중첩 너무 심함 .. ㅠ
    if (targetList === 'number') {
        console.log(targetList);
        // 첫번째 operator가 들어오기 전까지 첫번째 숫자 계속 받음
        if (!operator) { // 원래 0인데 계속 0 누르면 0 축적되지 않게 함
            if (firstNum.slice(0, 1) === '-') {
                if (firstNum.slice(1, 2) !== '0' || targetContent !== '0') {
                    if (firstNum.slice(1, 2) === '0' && targetContent !== '0')
                        firstNum = firstNum.slice(0, 1);
                    firstNum += targetContent;
                    display.textContent = firstNum;
                    console.log("first : " + firstNum);
                }
            } else {
                if (firstNum.slice(0, 1) !== '0' || targetContent !== '0') {
                    if (firstNum.slice(0, 1) === '0' && targetContent !== '0')
                        firstNum = firstNum.substring(1);
                    firstNum += targetContent;
                    display.textContent = firstNum;
                    console.log("first : " + firstNum);
                }
            }
        }
        // 두번째 operator가 들어오기 전까지 두번째 숫자 계속 받음
        else if (!secondOperator) {
            if (secondNum.slice(0, 1) === '-') {
                if (secondNum.slice(1, 2) !== '0' || targetContent !== '0') {
                    if (secondNum.slice(1, 2) === '0' && targetContent !== '0')
                        secondNum = secondNum.slice(0, 1);
                    secondNum += targetContent;
                    display.textContent = secondNum;
                    console.log("first : " + secondNum);
                }
            } else {
                if (secondNum.slice(0, 1) !== '0' || targetContent !== '0') {
                    if (secondNum.slice(0, 1) === '0' && targetContent !== '0')
                        secondNum = secondNum.substring(1);
                    secondNum += targetContent;
                    display.textContent = secondNum;
                    console.log("second : " + secondNum);
                } else display.textContent = secondNum;
            }
        }
        /* 2 연산자 클릭 시 */
    } else if (targetList === 'op') {
        // display.textContent = firstNum;
        console.log(targetList);
        if (firstNum) {
            // 첫번째 연산 기호 받기
            if (!operator) operator = targetContent;
            // 두번째 연산 기호 받기
            else {
                secondOperator = targetContent;
                calculate();    // 앞의 firstNum op secondNum 수행
                display.textContent = firstNum; // 앞의 연산 결과 보여줌
                // secondOperator를 operator로 당김
                operator = secondOperator;
                secondOperator = '';
            }
        } else { // 아무 숫자 없을 때는 연산자 기호 무시
            display.textContent = 0;
        }
        /* 3 +/- 기호 클릭 시 */
    } else if (targetList === 'mark') {
        console.log(targetList);
        // 첫번째 숫자인지, 두번째 숫자인지 구분
        if (!operator) {
            firstNum = PlusOrMinus(firstNum);
        } else if (!secondOperator) {
            secondNum = PlusOrMinus(secondNum);
        }
        /* 4 소숫점 클릭 시 */
    } else if (targetList === 'dot') {
        console.log(targetList);
        if (!operator) {
            firstNum += targetContent;
            display.textContent = firstNum;
        }
        else {
            secondNum += targetContent;
            display.textContent = secondNum;
        }
        /* 5 계산 결과 출력 버튼 클릭 시 */
    } else if (targetList === 'equal') {
        if (firstNum) {
            if (operator && secondNum) calculate(); // 남아있는게 있으면 계산
            console.log(targetList);
            display.textContent = firstNum;
            // 초기화
            operator = '';
            secondOperator = '';
            secondNum = '0';
        } else display.textContent = 0; // 아무것도 없으면 그냥 0
        /* 6 초기화 버튼(AC) 클릭 시 */
    } else if (targetList === 'ac') {
        // 싹 다 초기화
        console.log(targetList);
        firstNum = '0';
        secondNum = '0';
        operator = '';
        secondOperator = '';
        display.textContent = 0;
    }

    /* 확인용 코드
    console.log(targetButton); 
    console.log(targetButton.classList[0]);
    */
});