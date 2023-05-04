let myForm = document.getElementById("myform")
let synth = new Tone.Synth().toDestination()


function onSubmit (e) {
    e.preventDefault()
    synth.triggerAttack(myForm.elements["yourName"].value)
    synth.triggerRelease(Tone.now() + parseFloat(myForm.elements["duration"].value))

}

myForm.addEventListener("submit", onSubmit)