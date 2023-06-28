//  for toggle navbar

let navToggle = document.querySelector('.toggle')
let toggled = document.querySelector('.toggled')
let toggledI = document.querySelector('.toggle i')

navToggle.addEventListener('click', displayNav)

function displayNav() {
    if (toggled.classList.contains('dis')) {
        toggledI.classList.remove('fa-bars')
        toggledI.classList.add('fa-xing')
        toggled.classList.remove('dis')

    }else{
        toggledI.classList.remove('fa-xing')
        toggledI.classList.add('fa-bars')
        toggled.classList.add('dis')
    }
    
}
// search menus from the available foods

const searchBox = document.querySelectorAll('.input-text')
const product = document.querySelectorAll('.menu')
const pname = document.getElementsByTagName('h2')

searchBox.forEach(searchInput=>{
    searchInput.addEventListener('keyup', ()=>{
        let searchBox= searchInput.value.toUpperCase()
        for (let i = 0; i < pname.length; i++) {
            let match = product[i].getElementsByTagName('h2')[0]
    
            if(match){
                let textValue = match.textContent || match.innerHTML
    
                if (textValue.toUpperCase().indexOf(searchBox)> -1) {
                    product[i].style.display = '';
                }else{
                    product[i].style.display= 'none'
                }
            } 
        }

    })
})
// Order section

let orderSection = document.querySelector('.order-section')
let ItemList= document.querySelector('.items-list')

//check if the order secion has items
let box = document.querySelector('.box')

//add food menu and price to the order section
const orderButton = document.querySelectorAll('.btn')
const foodItem = document.querySelector('h2')
const itemPrice= document.querySelectorAll('.amount')
let priceTotal = document.querySelector('.total-price')

let orderList = document.querySelector('ul')

let foodPrice = []
orderButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        let productName = button.parentElement.childNodes[1].textContent
        let price = button.parentElement.childNodes[3].childNodes[1].textContent
        box.classList.remove('box2')
        foodPrice.push(price)
        let li =`<li><span class="items">${productName}</span><span class="price">${price}</span></li>`
        ItemList.innerHTML += li
    // calculate total price
    let sum = 0
    foodPrice.forEach(num => {
        let number = parseFloat(num)
        sum += number 
        priceTotal.textContent ='sh.'+ sum
    });

    
    })
})  

//confirm button
let confirmButton = document.querySelector('.confirm-btn')
let priceContainer = document.querySelector('.price-total')
confirmButton.addEventListener('click', ()=>{
    ItemList.innerHTML='<h1>Your Order Was Submited. Thank You</h1>'
    setTimeout(() => {
        box.classList.add('box2')
        ItemList.innerHTML=''
        foodPrice = []
    }, 2000);
    
})









