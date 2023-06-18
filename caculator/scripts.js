const numberButtons = document.querySelectorAll('.btn-num')
const operationButtons = document.querySelectorAll('.btn-op')
const equalButton = document.querySelector('.btn-equal')
const clearButton = document.querySelector('.btn-clear')
const deleteButton = document.querySelector('.btn-delete')
const currentNumber = document.querySelector('.current')
const previousNumber = document.querySelector('.previous')

numberButtons.forEach(buttons =>{
    buttons.addEventListener('click', ()=>{
        if (buttons.innerText ==='.' && currentNumber.innerHTML.includes('.'))return
        currentNumber.textContent += buttons.innerText
    })
})

operationButtons.forEach(buttons =>{
    
    buttons.addEventListener('click', ()=>{
        if (previousNumber.textContent !='') {
            previousNumber.innerHTML = eval(previousNumber.innerHTML + currentNumber.innerHTML)  + buttons.innerHTML
            currentNumber.innerHTML =''
        }else{
            previousNumber.textContent = currentNumber.innerHTML + buttons.innerText
            currentNumber.innerHTML =''
        }
        
    })
})

deleteButton.addEventListener('click', ()=>{
    currentNumber.innerHTML = currentNumber.innerHTML.toString().slice(0, -1)
})

clearButton.addEventListener('click', ()=>{
    currentNumber.innerHTML = ''
    previousNumber.innerHTML = ''
})

equalButton.addEventListener('click', ()=>{
    currentNumber.innerHTML = eval(previousNumber.innerHTML + currentNumber.innerHTML)
    previousNumber.innerHTML=''
})
