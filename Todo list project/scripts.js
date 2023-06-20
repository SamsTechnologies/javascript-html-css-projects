const input = document.querySelector('#input-text')
const addButton = document.querySelector('#add-button')
let toDo = document.querySelector('.to-do-list')
const complete= document.querySelector('.complete')
const listItems = document.querySelector('.to-do-list')
let faCheck= document.querySelector('.fa-check')
const faTrash= document.querySelector('.fa-trash')

//items stored in the local storage must be converted into an array
let data =(localStorage.getItem('toDoList')) ? JSON.parse(localStorage.getItem('toDoList')):{
    tasksList: [],
    completeTaskList: []
} 
renderTodoList()



addButton.addEventListener('click',addItem)
input.addEventListener('keydown', pressEnter)



function addItem(){
    if(input.value==='')return
    let task = input.value
    data.tasksList.push(task)
    //create li html text element
    let li= document.createElement('li')
    //add input value to li
    li.appendChild(document.createTextNode(task))
    // create a span that has a delete and complete button
    let buttons = document.createElement('span')
    //add the i element to the span tag
    let firstIcon = document.createElement('i')
    //add classes to the i element
    firstIcon.classList.add('fa','fa-trash')
    buttons.appendChild(firstIcon)
    let secondIcon = document.createElement('i')
    secondIcon.classList.add('fa','fa-check')
    buttons.appendChild(secondIcon)
    //add the span tag to the li item
    li.appendChild(buttons)
    // add the li item to the ul
    toDo.insertBefore(li, toDo.childNodes[0])
    input.value=''

    dataLocalStorage() 
}
//add tasks to the dom when you press enter
function pressEnter(e) {
    let task = input.value
    if(e.code ==='Enter' && task){
        addItem()
    }
}

function renderTodoList() {
    if(!data.tasksList.length && !data.completeTaskList.length)return

    data.tasksList.forEach(task => {
        let li= document.createElement('li')
        li.appendChild(document.createTextNode(task))
        let buttons = document.createElement('span')
        let firstIcon = document.createElement('i')
        firstIcon.classList.add('fa','fa-trash')
        buttons.appendChild(firstIcon)
        let secondIcon = document.createElement('i')
        secondIcon.classList.add('fa','fa-check')
        buttons.appendChild(secondIcon)
        li.appendChild(buttons)
        toDo.appendChild(li)
    });
    data.completeTaskList.forEach(task => {
        let li= document.createElement('li')
        li.appendChild(document.createTextNode(task))
        let buttons = document.createElement('span')
        let firstIcon = document.createElement('i')
        firstIcon.classList.add('fa','fa-trash')
        buttons.appendChild(firstIcon)
        let secondIcon = document.createElement('i')
        secondIcon.classList.add('fa','fa-check')
        buttons.appendChild(secondIcon)
        li.appendChild(buttons)
        complete.appendChild(li)
    });

    
}

function dataLocalStorage() {

    localStorage.setItem('toDoList', JSON.stringify(data))
}




listItems.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa-check')){
        let li = e.target.parentNode.parentNode;
        listItems.removeChild(li);
        complete.insertBefore(li, complete.childNodes[0])
        let lis = e.target
        let inner = li.innerText
        //storage
        data.tasksList.splice(data.tasksList.indexOf(inner), 1)
        data.completeTaskList.push(inner)
               
        lis.style.backgroundColor=''
        lis.style.color=''
    }
    
})
complete.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa-check')){
        let li = e.target.parentNode.parentNode;
        complete.removeChild(li);
        listItems.appendChild(li)
        let lis = e.target
        let inner = li.innerText
        //storage
        data.completeTaskList.splice(data.completeTaskList.indexOf(inner), 1)
        data.tasksList.push(inner)
                       
        
    }
    dataLocalStorage()
})

listItems.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa-trash')){
        let li = e.target.parentNode.parentNode;
        let item=li.innerText
        // storage remove item in storage
        data.tasksList.splice(data.tasksList.indexOf(item), 1)
        
        listItems.removeChild(li);
    }
    dataLocalStorage()
})
complete.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa-trash')){
        let li = e.target.parentNode.parentNode;
        let item=li.innerText
        // storage remove item in storage
        data.completeTaskList.splice(data.completeTaskList.indexOf(item), 1)

        
        complete.removeChild(li);
    }dataLocalStorage()
})


// localStorage.clear();


