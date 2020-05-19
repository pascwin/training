//

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");

function addDoneFunktiontoListElements() {
    var button = buttonFuerListenElement();
    for (i=0; i < list.length; i++){
        list[i].appendChild(button)
        list[i].addEventListener("click", function(e){
            e.currentTarget.classList.toggle("done");
        })
    }
}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = erstelleListElement();
    var button = buttonFuerListenElement();
    li.appendChild(button)
    ul.appendChild(li);
    input.value = "";
}

function erstelleListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    li.addEventListener("click", function(e){
        e.currentTarget.classList.toggle("done");
    })
    return li;
}

function buttonFuerListenElement() {
    var button = document.createElement("button")
    button.appendChild(document.createTextNode("delete"))
    button.addEventListener("click", function(e){
        this.parentElement.remove();
    })
    return button;
}

function addListAfterClick() {
    if (inputLength() > 2) {
        createListElement();
    }
}

function addListAfterEnter(event) {
    if (inputLength() > 2 && event.keyCode === 13) {
        createListElement();
    }
}

addDoneFunktiontoListElements()
button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterEnter)