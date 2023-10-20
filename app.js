var input = document.getElementById("userValue")
var list = document.getElementById("list")



function adding(){


var liElement = document.createElement("li")
var liNames = document.createTextNode(input.value)
liElement.appendChild(liNames)
list.appendChild(liElement)
console.log(liElement)


var addBtn = document.createElement("button")
var addBtnText = document.createTextNode("Edit")
addBtn.appendChild(addBtnText)
liElement.appendChild(addBtn)

addBtn.setAttribute("onclick","addItem(this)")


var delBtn = document.createElement("button")
var delBtnText = document.createTextNode("Delete")
delBtn.appendChild(delBtnText)
liElement.appendChild(delBtn)

delBtn.setAttribute("onclick","deleteItem(this)")





input.value=""
}

function deleting(){
  var list = document.getElementById("list")
  list.innerHTML= "" 







}

function deleteItem(x){
console.log(x.parentNode.remove())
}


function addItem(e){
var input = prompt("Enter tour updated value")
e.parentNode.firstChild.nodeValue = input;
}

