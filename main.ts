basic.forever(function () {
    if (input.compassHeading() < 75 || input.compassHeading() > 105) {
        music.playTone(659, music.beat(BeatFraction.Whole))
    }
})
