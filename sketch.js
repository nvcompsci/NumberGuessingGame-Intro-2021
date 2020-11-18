let rand
let guessBox
let result

function setup() {
  noCanvas()
  rand = round(random(10))
  createP("Number Guessing Game")
  guessBox = createInput()
  let button = createButton("Go!")
  button.mouseClicked(checkAnswer)
  result = createP()
}

function checkAnswer() {
  if (guessBox.value() == rand) {
    result.html("You're right!")    
  }
}
