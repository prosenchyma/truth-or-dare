basic.showLeds(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let randomNumber = randint(0, 3)
    if (randomNumber == 2) {
        basic.showString("Two dares")
    }
    
    if (randomNumber == 0) {
        basic.showString("Truth")
    }
    
    if (randomNumber == 1) {
        basic.showString("Dare")
    }
    
    basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . . # . .
    . . # . .
    `)
})
