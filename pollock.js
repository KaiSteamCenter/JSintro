let myCanvas = document.getElementById('myCanvas')
paper.setup(myCanvas)


function drawCircle(e) {
    console.log(e)
    if (isMouseDown) {
        let circle = new paper.Path.Circle({
            radius: Math.random() * 30,
            center: {
                x: e.x, 
                y: e.y
            }
        })
        
        let red = Math.random() * 255
        let green = Math.random() * 255
        let blue = Math.random() * 255

    circle.fillColor = "rgb(" + red + "," + green + "," + blue + ")"

    }
}
let isMouseDown = false

function mouseUp() {
     isMouseDown = false
}
function mouseDown() {
     isMouseDown = true
}

myCanvas.addEventListener("mousemove", drawCircle)
myCanvas.addEventListener("mousedown", mouseDown)
myCanvas.addEventListener("mouseup", mouseUp)
