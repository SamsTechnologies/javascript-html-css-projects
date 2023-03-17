let container = document.querySelector(".container")
let words=["Samstech the programmer","Hack Me If You Can","Practice Makes Perfect","Always Stay Positive"," Coding is fan",]



container.addEventListener("click", function () {
    if (container.innerHTML==="JavaScript"){
        let randomIndex =Math.floor(Math.random()*5)
        container.innerHTML=words[randomIndex]
    }else{
        let randomIndex =Math.floor(Math.random()*5)
        container.innerHTML=words[randomIndex]
    }
})

