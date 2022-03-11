let inputs = document.querySelectorAll("input[type=text]");

// Creates list of user inputs
function createUserInputList(list){
    let text = "";
    
    for (let i = 0; i < inputs.length; i++) {
        text += inputs[i].value;
    }
  
    let li = document.createElement("li");
    let node = document.createTextNode(text);
    li.appendChild(node);
    document.getElementById("list").appendChild(li);
  
  
    }
// User enters info and hits submit
function enterUserInput(){
  let submitUserInput = document.querySelector("#submit").addEventListener("click", addUserListToPage);
}

// determines that the user has entered data
function userInputLength(){
    return inputs.length
  }

// When user has entered info, will create list      
  function addUserListToPage(){
    if (userInputLength > 0) {
      createUserInputList()
    }
  }