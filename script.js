let input = document.querySelectorAll("input[type=text]");

// User enters info and hits submit
function enterUserInput(){
  let submitUserInput = document.querySelector("#submit").addEventListener("click", addUserListToPage);
}

// determines that the user has entered data
function userInputLength(){
  
  return input.length
  }

// When user has entered info, will create list      
  function addUserListToPage(){
    if (userInputLength > 0) {
      createUserInputList()
    }
  }

// Creates list of user  
function createUserInputList(list){
    let text = "";
    

    for (let i = 0; i < input.length; i++) {
        text += input[i].value;
    }
//   Creates the li for the user data
  function createListItems(){
    let li = document.createElement("li");
    li.appendChild(node);
  }
    
    let node = document.createTextNode(text);
    
    document.getElementById("list").appendChild(li);
  
  
    }