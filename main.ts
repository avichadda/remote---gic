radio.setGroup(5)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("F")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("R")
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendString("L")
    } else if (input.logoIsPressed()) {
        radio.sendString("B")
    } else {
        radio.sendString("S")
    }
})
