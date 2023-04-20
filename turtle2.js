let aquarium = document.getElementById("aquarium")
let turtle = new RealTurtle.default(aquarium, {autoStart: true})
turtle.setSpeed(.999999)


function polygon(sides, size = 20) {
    for (let i = 1; i <= sides; i++) {
        turtle.forward(size)
        turtle.right(360/sides)
    }
}

for (let i = 1; i <= 5; i++) {
    polygon((Math.random() *10)+3)
}