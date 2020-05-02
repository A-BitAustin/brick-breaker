namespace SpriteKind {
    export const edge = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const Top = SpriteKind.create()
    export const brick = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity((sprite.x - otherSprite.x) * 3, -1 * sprite.vy)
    if (sprite.vy > -150) {
        sprite.vx += -5
    }
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.edge, function (sprite, otherSprite) {
    sprite.setVelocity(-1 * sprite.vx, sprite.vy)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log(convertToText(numBricks))
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.brick, function (sprite, otherSprite) {
    info.changeScoreBy(15)
    otherSprite.destroy(effects.ashes, 200)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    numBricks += -1
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Top, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
function buildSetBlocks () {
    for (let index = 0; index <= 6; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            createBrick(index * 16 + 32, col * 8 + 24)
            col += 1
        }
        col = 0
    }
}
function createBrick (x: number, y: number) {
    randNum = Math.randomRange(0, 2)
    if (randNum == 0) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (randNum == 1) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f a a a a a a a a a a a a a a f 
f a a a a a a a a a a a a a a f 
f a a a a a a a a a a a a a a f 
f a a a a a a a a a a a a a a f 
f a a a a a a a a a a a a a a f 
f a a a a a a a a a a a a a a f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    }
    brick2.setPosition(x, y)
    numBricks += 1
}
let brick2: Sprite = null
let randNum = 0
let col = 0
let numBricks = 0
let startBallVar = 0
info.setScore(0)
info.setLife(2)
startBallVar += 0
scene.setBackgroundColor(15)
let Paddle = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.Player)
Paddle.setPosition(80, 110)
controller.moveSprite(Paddle, 100, 0)
Paddle.setFlag(SpriteFlag.StayInScreen, true)
let top = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.Top)
top.setPosition(80, 0)
let left = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.edge)
left.setPosition(0, 60)
let right = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.edge)
right.setPosition(159, 60)
let ballVar = sprites.create(img`
. d d . 
d d d d 
d d d d 
. d d . 
`, SpriteKind.Ball)
numBricks = 0
col = 0
buildSetBlocks()
game.onUpdate(function () {
    if (startBallVar == 0) {
        ballVar.setPosition(Paddle.x, 105)
        ballVar.setVelocity(0, 0)
        if (controller.A.isPressed()) {
            startBallVar = 1
        }
    }
    if (startBallVar == 1) {
        ballVar.setVelocity(Math.randomRange(-30, 30), -50)
        startBallVar = 2
    }
    if (ballVar.y > 115) {
        startBallVar = 0
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (numBricks <= 0) {
        numBricks = 0
        startBallVar = 0
        effects.confetti.startScreenEffect()
        pause(2000)
        effects.confetti.endScreenEffect()
        buildSetBlocks()
        info.changeScoreBy(100)
    }
})
