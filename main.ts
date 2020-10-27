input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
let Ticks = 0
let Bird: game.LedSprite = null
let obstacles: game.LedSprite[] = []
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Brightness, 100)
let emptyObstacley = 0
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    if (Ticks % 3 == 0) {
        emptyObstacley = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != emptyObstacley) {
                obstacles.push(game.createSprite(4, index))
            }
        }
    }
    for (let obstacle of obstacles) {
        if (obstacle.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && obstacle.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    Ticks += 1
    basic.pause(1000)
})
