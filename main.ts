input.onButtonPressed(Button.A, function () {
    Timer = 0
    basic.showIcon(IconNames.Happy)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    Timer = 0
    basic.showIcon(IconNames.Silly)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.slide), SoundExpressionPlayMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    Timer = 0
    basic.showIcon(IconNames.Surprised)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
let Timer = 0
basic.showIcon(IconNames.Giraffe)
basic.pause(500)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
basic.forever(function () {
    basic.pause(1000)
    Timer += 1
    if (Timer == 30) {
        basic.showIcon(IconNames.Asleep)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
    }
    if (Timer == 40) {
        basic.showIcon(IconNames.Sad)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    }
    if (Timer == 60) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.UntilDone)
        music.setBuiltInSpeakerEnabled(false)
        while (true) {
            basic.showIcon(IconNames.Skull)
        }
    }
})
