basic.show_leds("""
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
""")

def on_button_pressed_a():
    randomNumber = randint(0,3)
    if randomNumber == 2:
        basic.show_string("Two dares")
    if randomNumber == 0:
        basic.show_string("Truth")
    if randomNumber == 1:
        basic.show_string("Dare")
    basic.show_leds("""
    . . # . .
    . # # # .
    # # # # #
    . . # . .
    . . # . .
    """)
input.on_button_pressed(Button.A, on_button_pressed_a)
