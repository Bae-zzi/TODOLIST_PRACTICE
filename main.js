const addBtn = document.querySelector('#addBtn');

function keyCodeCheck () {
    if(window.event.keyCode === 13 && todoInput.value !== '') {
        createTodo();
    }
}

addBtn.addEventListener('click', () => {
    if(todoInput.value !=='') {
        createTodo();
    }
})


function createTodo () {
  const todoList = document.querySelector('#todoList');
        const newLi = document.createElement('li');
        const newBtn = document.createElement('button');
        const newSpan = document.createElement('span');
        const todoInput = document.querySelector('#todoInput');

        newLi.appendChild(newBtn);
        newLi.appendChild(newSpan);

        newSpan.textContent = todoInput.value;
        todoList.appendChild(newLi);

        todoInput.value = '';

        newBtn.addEventListener('click', () => {
            newLi.classList.toggle('complete');
            console.log(newBtn);
        })

            newLi.addEventListener('dblclick', () => {
                newLi.remove();
            })
   
            }

            
                  
          

          function deleteAll() {
            const liList = document.querySelectorAll('#todoList li');
            for(let i=0; i<liList.length; i++) {
                liList[i].remove()
                console.log(liList);
                    }                       
                }

                function saveItemsFn () {
                  const saveItems = [];
                  for (let i = 0; i < todoList.children.length; i++){
                      const todoObj = {
                          contents: todoList.children[i].querySelector('span').textContent,
                          complete: todoList.children[i].classList.contains('complete')
                      };
                      saveItems.push(todoObj);                                                
                  }        
                  console.log(saveItemsFn);  
      }          