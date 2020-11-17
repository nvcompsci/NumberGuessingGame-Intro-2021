let guess
let button
let result
let rand

function setup() {
  noCanvas()
  createP("Number Guessing Game")
  guess = createInput()
  
  button = createButton("Go!")
  button.mouseClicked(checkAnswer)
  result = createP()
  rand = round(random(10))
}

function checkAnswer() {
  console.log(rand)
  if (guess.value() == rand) {
    result.html("You're right!")
  }
  else if (2 + 2 == 5) {
             
  }
  else {
    result.html("Wrong!")
  }
}
