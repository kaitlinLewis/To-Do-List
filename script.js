// this line of code is read first and input = empty/undefine variable has no valu
document.querySelector("#submit").addEventListener("click", userInputLength);
// determines that the user has entered data
function userInputLength(){
//   I dont think this needs to go here:
  

  return document.querySelectorAll("input[type=text]").length;
  if (userInputLength() > 0) {
      createUserInputList()
      }
}



// Creates list of user  
function createUserInputList(){
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

// Hey guys this is videet lets complete this whenever you get time. feel free to edit and fiddle around.