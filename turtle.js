let aquarium = document.getElementById("aquarium")
let turtle = new RealTurtle.default(aquarium, {autoStart: true})
turtle.setSpeed(.8)
turtle.setStrokeColorRGB(0, 255,100)
turtle.setFillStyle('red')
turtle.setPosition(150,150)


turtle.beginPath()
for (let i = 1; i <= 4; i++) {
    turtle.forward(100)
    turtle.right(90)
  }
turtle.closePath()

turtle.setPosition(185,150)
turtle.beginPath()
for (let i = 1; i <= 4; i++) {
    turtle.forward(30)
    turtle.right(90)
  }
turtle.closePath()


turtle.setPosition(150,50)
turtle.beginPath()
turtle.right(60)
turtle.forward(60)
turtle.right(60)
turtle.forward(60)


