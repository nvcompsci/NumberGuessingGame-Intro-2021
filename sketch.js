let rand
let guessBox
let result
let triesLeft = 3

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
  //alert(guessBox.value())

  console.log(rand)

  
    if (guessBox.value() == rand) {
      result.html("You're right!")
    } else if (guessBox.value() < rand) {
      result.html("Too low!")
      triesLeft--
    } else {
      //tell user their guess is too high
      result.html("Too high!")
      triesLeft--
    }

  if (triesLeft <= 0) {
    result.html("You lose!")
  }
  
  
}
