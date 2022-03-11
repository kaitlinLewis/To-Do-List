//Get length of user input
function userInputLength(){
  return document.getElementById("userText").value.length;
}

// Creates list of user text 
function createUserInputList(){
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(document.getElementById("userText").value));
  document.querySelector("ul").appendChild(li);
}

// Adds user input to list
function addUserTextToList(){
  if (userInputLength() > 0) {
      createUserInputList()
      }
}

document.querySelector("#submit").addEventListener("click", addUserTextToList);

// Hey guys this is videet lets complete this whenever you get time. feel free to edit and fiddle around.
// Update: it works!!!!! Now to just get it to cross off done tasks...