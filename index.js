const textarea=document.querySelector('textarea')
const addBtn=document.getElementById('addBtn')
const todoContainer=document.querySelector('.todoContainer')

let todoList=[]
function initialized(){
    if(!localStorage.getItem('todos')){return}
 todoList = JSON.parse(localStorage.getItem('todos'));

 updateUI()
}
initialized()
function addTodo(){
  const todo=textarea.value
    if(!todo){return}
  console.log('Added todo:',todo)
  todoList.push(todo)
  textarea.value=''
  updateUI()

}
function editTodo(index){
    textarea.value=todoList[index]
    todoList=todoList.filter((element,elementIndex)=>{
        if(index===elementIndex){return false}
        return true
    })
      updateUI()

}
function deleteTodo(index){
    todoList=todoList.filter((element,elementIndex) =>{
    if(index===elementIndex){return false}
    return true
    })
   updateUI() 
}

function updateUI() {
    let newInnerHTML = ''

    todoList.forEach((todoElement,todoIndex) => {
        newInnerHTML += `
        <div class="todo">
        <p>${todoElement}</p>
        <div class="btnContainer">
            <button class="iconBtn" onclick="editTodo(${todoIndex})">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="iconBtn" onclick="deleteTodo(${todoIndex})">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
    </div>
        `
    })

 todoContainer.innerHTML = newInnerHTML
 localStorage.setItem('todos',JSON.stringify(todoList))
}
addBtn.addEventListener('click',addTodo)