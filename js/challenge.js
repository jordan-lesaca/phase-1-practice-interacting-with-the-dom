document.addEventListener("DOMContentLoaded", function(){
    const counter = document.getElementById("counter")
    const plus = document.getElementById("plus")
    const minus = document.getElementById("minus")
    const heart = document.getElementById("heart")
    const pause = document.getElementById("pause")
    const commentForm = document.getElementsByTagName("form")[0]

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

const arr = []

heart.addEventListener("click", function(){
    const counter = document.getElementById("counter")
    const parse = parseInt(counter.innerText)
    let objcounter
    if(arr.find(obj => obj.counter === parse)){
        objcounter = arr.find(obj => obj.counter === parse)
        objcounter.i++       
    } else {
     objcounter = {
        counter: parse,
        i: 1
        }
        arr.push(objcounter)
    }
    const createLi = document.createElement("li")
    const listLi = document.querySelector(".likes")
    createLi.textContent = `${parse} has been liked ${objcounter.i} times`
    listLi.appendChild(createLi)
    })

pause.addEventListener("click", function(){
    // const buttons = document.getElementsByTagName(`.button`)
    // console.log(buttons)
    // if(buttons.disabled === false){
    //     clearInterval(count)
    //     buttons.disabled = true
    //     console.log("hello")
    // } else {
    //     buttons.disabled = false
    //     console.log("bye")
    // }
    // clearInterval(count)

    if(plus.disabled === false && minus.disabled === false && heart.disabled === false && pause.disabled === false){
        clearInterval(count)
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true
        pause.innerHTML = "resume"
    } else {
        plus.disabled = false
        minus.disabled = false
        heart.disabled = false
        pause.diabled = false
        if(pause.innerHTML === "resume"){
        pause.innerHTML = "pause"
        setInterval(second, 1000)
    } else if (pause.innerHTML === "pause"){
        pause.innerHTML = "pause"
        clearInterval(count)
    }
    }  
    
})

commentForm.addEventListener("submit", function(a){
    a.preventDefault()
    let b = this.children[0]
    c = b.value; b.value = ""
    var d = document.querySelector(".comments")
    e = document.createElement("p")
    e.innerText=c,d.appendChild(e)

})


})

