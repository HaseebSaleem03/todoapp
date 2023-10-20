function addtodo() {
    var input = document.getElementById("input");
    
    var liElement = document.createElement("li");
  
    var liText = document.createTextNode(input.value);
  
    liElement.appendChild(liText);
  
    var deletebtn = document.createElement("button");
  
    var deletebtnText = document.createTextNode("Delete");
  
    deletebtn.appendChild(deletebtnText);
  
    deletebtn.setAttribute("onclick", "deleteItem(this)");
  
    liElement.appendChild(deletebtn);
  
    
  
    var editbtn = document.createElement("button");
  
    var editbtnText = document.createTextNode("Edit");
  
    editbtn.appendChild(editbtnText);
  
    liElement.appendChild(editbtn);
  
    editbtn.setAttribute("onclick", "editItem(this)");
  
    var list = document.getElementById("list");
  
    list.appendChild(liElement);
  
    console.log(liElement);
  
    input.value = "";
  }
  
  function deleteAll() {
    var list = document.getElementById("list");
    list.innerHTML = "";
  }
  
  function deleteItem(x) {
    console.log(x.parentNode.remove());
  }
  
  function editItem(e) {
    var input = prompt("Enter your value");
  
    e.parentNode.firstChild.nodeValue = input;
  }