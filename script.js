const submitButton = document.querySelector("#submitButton")
const Input = document.querySelector(".mymouth")
const ErrorState = document.querySelector(".boy")


const popup = document.querySelector(".sub")
const confirmationMessage = document.querySelector(".confirm")
const DismissButton = document.querySelector(".btn12")






submitButton.addEventListener("click", function () {

    if (Input.value == "") {
        Input.classList.add("turnup");
        ErrorState.textContent = "Field is empty";
        return;
    }
    if (Input.value.search(/[^a-z0-9@.]/i) !== -1) {
        Input.classList.add("turnup");
        ErrorState.textContent = "No special character allowed";
        return;
    }

    Handlepopup(Input.value)
})



function Handlepopup(text) {
    confirmationMessage.textContent = `A confirmation code has been sent to ${text} please open it and  click the button insidee to confirm your subscription.`

    if (popup.classList.contains("showcase")) {
        popup.classList.remove("showcase")
        popup.classList.add("shop")
    }
}


DismissButton.addEventListener("click", function () {
    if (popup.classList.contains("shop"))
        popup.classList.remove("shop")
    popup.classList.add("showcase")
})




const button = document.querySelectorAll(".milo")
const mall1 = document.querySelector(".mall1")
const mall2 = document.querySelector(".mall2")
const wide = document.getElementsByClassName("wide1")[0]
const clr = document.querySelector(".clr")
const del = document.getElementsByClassName("del")[0]


for (let i = 0; i < button.length; ++i) {
    button[i].addEventListener("click", function () {
        let press = button[i].innerText;
        mall1.textContent += press
    })
}

wide.addEventListener("click", function () {
    const value = mall1.textContent;
    const result = eval(value);
    mall2.textContent = result;
})
clr.addEventListener("click", function () {
    mall1.textContent = ""
    mall2.textContent = 0;
})

del.addEventListener("click", () => {
    const screenValue = mall1.textContent;
    mall1.textContent = screenValue.slice(0, -1)
})



//HOME WORK
//1 list out all the event we have in html
//2 what is function in javascript
//3 what is object and array in javascript

//4 Define and explain what /when to use the following:
//a textContent
//b innerText 
//c innerHtml

//5 How to declare element base on their attribute in javascript and what the simplest way to declare an element 
//in javascript.

const sub = (b,f)=>{
    return b-f;
}
