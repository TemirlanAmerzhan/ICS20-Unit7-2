document.getElementById('button').addEventListener
('click',comparison)
let userInput = 0

function comparison() {
  // get user input and convert to an integer
  userInput = document.getElementById('input')
  .value
  userInput = parseInt(userInput)

  //check if userInput is less than 0
  if (userInput < 0) {
    document.getElementById('answer').innerHTML = 
    "Negative"
  } else {
    document.getElementById('answer').innerHTML =
    "Positive"
  }

}
