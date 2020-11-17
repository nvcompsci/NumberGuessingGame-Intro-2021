let rand
let guessBox
let button
let result

function setup() {
  noCanvas()
  rand = round(random(10))
  createP("Number Guessing Game")
  guessBox = createInput()
  button = createButton("Go!")
  button.mouseClicked(checkAnswer)
  result = createP()
}

function checkAnswer() {
  console.log(rand)
  if (guessBox.value() == rand) {
    result.html("You're right!")
  }
  else {
    result.html("Wrong!")
  }
}



