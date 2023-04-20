let aquarium = document.getElementById("aquarium")
let turtle = new RealTurtle.default(aquarium, {autoStart: true})
turtle.setSpeed(1)
turtle.setStrokeColorRGB(0, 255,100)


turtle.setFillStyle('skyblue')
turtle.setPosition(0,0)
turtle.setStrokeColorRGB(0, 255,255)
turtle.beginPath()
for (let i = 1; i <= 2; i++) {
  turtle.right(90)
  turtle.forward(300)
  turtle.right(90)
  turtle.forward(150)  
}
turtle.closePath()
turtle.fill()
turtle.setPosition(150,135)


// Square Box
turtle.beginPath()
for (let i = 1; i <= 4; i++) {
    turtle.forward(100)
    turtle.right(90)
  }
turtle.closePath()
turtle.setFillStyle('black')
turtle.fill()


// Sun
turtle.setStrokeColorRGB(255, 255, 0 )
turtle.setPosition(30,30)
turtle.arc(20,360)
turtle.setStrokeColorRGB(0, 255,255)
turtle.setFillStyle('gold')

turtle.fill()

// Door
turtle.setPosition(185,135)
turtle.beginPath()
for (let i = 1; i <= 4; i++) {
    turtle.forward(30)
    turtle.right(90)
  }
turtle.setFillStyle('grey')
turtle.closePath()
turtle.fill()

// Triangle
turtle.setPosition(150,35)
turtle.beginPath()
turtle.right(60)
turtle.forward(60)
turtle.right(60)
turtle.forward(60)
turtle.closePath()
turtle.setFillStyle('red')
turtle.fill()


// Left Window
turtle.setStrokeColorRGB(255,255,255)
turtle.setPosition(160,80)
turtle.right(240)
turtle.beginPath()
for (let i = 1; i <= 4; i++) {
    turtle.forward(20)
    turtle.right(90)
  }
turtle.closePath()
turtle.setFillStyle('white')
turtle.fill()
turtle.setPosition(215,80)

// Right Window
turtle.beginPath()
for (let i = 1; i <= 4; i++) {
    turtle.forward(20)
    turtle.right(90)
  }
turtle.closePath()
turtle.setFillStyle('white')
turtle.fill()

turtle.setStrokeColorRGB(0,0,0)
turtle.setPosition(0,175)
turtle.beginPath()
for (let i = 1; i <= 2; i++) {
  turtle.forward(40)
  turtle.right(90)
  turtle.forward(300)
  turtle.right(90)
}
turtle.closePath()

turtle.setFillStyle('green')
turtle.fill()