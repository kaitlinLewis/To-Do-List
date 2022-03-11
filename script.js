function enterUserInput(){
  let submitUserInput = document.querySelector().addEventListener("click", addUserListToPage);
}

function userInputLength(){
    return inputs.length
  }
      
  function addUserListToPage(){
    if (userInputLength > 0) {
      createUserInputList()
    }
  }

function createUserInputList(list){
    let text = "";
    let inputs = document.querySelectorAll("input[type=text]");
    for (let i = 0; i < inputs.length; i++) {
        text += inputs[i].value;
    }
  
    let li = document.createElement("li");
    let node = document.createTextNode(text);
    li.appendChild(node);
    document.getElementById("list").appendChild(li);
  
  
    }
    