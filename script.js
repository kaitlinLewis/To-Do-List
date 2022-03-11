
let input = document.querySelectorAll("input[type=text]");

// User enters info and hits submit
document.querySelector("#submit").addEventListener("click", addUserListToPage);


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
  let li = document.createElement("li");
    let node = document.createTextNode(text);
    li.appendChild(node);
    document.getElementById("list").appendChild(li);
}
