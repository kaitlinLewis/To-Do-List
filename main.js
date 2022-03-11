function mainFunction(list) {
  let text = "";
  let inputs = document.querySelectorAll("input[type=text]");
  for (let i = 0; i < inputs.length; i++) {
    text += inputs[i].value;
  }
  
  
}