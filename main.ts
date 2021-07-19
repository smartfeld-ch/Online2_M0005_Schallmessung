input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    basic.clearScreen()
    basic.showNumber(max_lautstärke)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    max_lautstärke = 0
})
let max_lautstärke = 0
basic.showString(":)")
let schallpegel = input.soundLevel()
basic.forever(function () {
    schallpegel = input.soundLevel()
    if (schallpegel > 150) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (schallpegel > max_lautstärke) {
        max_lautstärke = schallpegel
    }
})
