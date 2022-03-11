// this line of code is read first and input = empty/undefine variable has no value


// User enters info and hits submit this is run



// determines that the user has entered data
function userInputLength(){
  document.querySelector("#submit").addEventListener("click", addUserListToPage);
  let userInput = document.querySelectorAll("input[type=text]");
  return userInput.length
}

// When user has entered info, will create list      
  function addUserListToPage(){
    if (userInputLength() > 0) {
      createUserInputList()
      }
    }

// Creates list of user  
function createUserInputList(list){
    let text = "";
    let input = document.querySelectorAll("input[type=text]").value;
    for (let i = 0; i < input.length; i++) {
        text += input[i].value;
    }
    let li = document.createElement("li");
    let node = document.createTextNode(text);
    li.appendChild(node);
    document.getElementById("list").appendChild(li);
  }

