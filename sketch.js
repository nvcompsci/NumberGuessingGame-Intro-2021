let guess
let button
let result
let rand

function setup() {
  createCanvas(400, 400);
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
  else {
    result.html("Wrong!")
  }
}

function draw() {
  background(220);
}
