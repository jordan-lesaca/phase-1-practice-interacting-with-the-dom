document.addEventListener("DOMContentLoaded", function(){
    const counter = document.getElementById("counter")
    const plus = document.getElementById("plus")
    const minus = document.getElementById("minus")
    const heart = document.getElementById("heart")

    const second = () => {
        counter.innerText = parseInt(counter.innerText,  10) + 1
    }

    const subSecond = () => {
        counter.innerText = parseInt(counter.innerText, 10) - 1
    }


let count = setInterval(second, 1000)

plus.addEventListener("click", function(){
    const a = document.getElementById("counter")
    const b = parseInt(a.innerText)
    a.innerText=b+1
})

minus.addEventListener("click", function(){
    const a = document.getElementById("counter")
    const b= parseInt(a.innerText)
    a.innerText=b-1
})

let i = 0

heart.addEventListener("click", function(){
    const counter = document.getElementById("counter")
    const parse = parseInt(counter.innerText)
    const createLi = document.createElement("li")
    const listLi = document.querySelector(".likes")

    createLi.textContent = `${parse} has been liked ${i} times`
    listLi.appendChild(createLi)
    })

})

