const todolist = document.querySelector('.todolist');
const inputText = document.querySelector('.text');
const addButton = document.querySelector('.button');
const board = document.querySelector('#board');


let todos = [];

function painttodo () {
    // 입력값 없이 더하기 눌렀을 때 리스트 생성 안되고 알람 띄우기
    if(inputText.value !== '') {
        /**
         * li 태그 생성하기
         * span 태그 생성하기
         * x 버튼 생성하기
         * span 태그에 input 값 가져와서 넣기
         * li 태그에 span 태그 넣기
         * li 태그에 x 버튼 넣기
         * li 태그를 ul 태그에 추가하기
         * todos 배열에 input 값 추가하기
         * input 값 초기화하기
         **/
        const li = document.createElement('li')
        const span = document.createElement('span')
        const innerBtn = document.createElement('button')

        const inputTextValue = inputText.value
        span.textContent = inputTextValue
        innerBtn.innerText = 'X'
        li.appendChild(span)
        li.appendChild(innerBtn)
        todolist.appendChild(li)

        todos.push(inputTextValue)

        inputText.value = '';
     } else {
        alert('작성을 해주세요.')
     }
     board.textContent = todos.join();
    }

addButton.addEventListener('click', painttodo)

// painttodo 안에 있는 innerBtn을 함수 밖으로 가져오기
