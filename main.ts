namespace SpriteKind {
    export const Text = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const Booth = SpriteKind.create()
    export const Mouse = SpriteKind.create()
    export const Crosshair = SpriteKind.create()
    export const Moon = SpriteKind.create()
}
namespace StatusBarKind {
    export const fuel = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    land(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    eagle.ay = gravity
    eagle.setImage(assets.image`myImage`)
})
function land (multiplyer: number) {
    if (eagle.vy > 8) {
        game.gameOver(false)
    } else {
        info.setScore(info.life() * multiplyer)
        game.gameOver(true)
    }
    if (eagle.vy > 8) {
        game.gameOver(false)
    } else {
        info.setScore(info.life() * multiplyer)
        game.gameOver(true)
    }
    if (eagle.vy > 8) {
        game.gameOver(false)
    } else {
        info.setScore(info.life() * multiplyer)
        game.gameOver(true)
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.life() > 0) {
        eagle.ax = THRUST
        eagle.setImage(assets.image`myImage0`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    land(3)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    eagle.ax = gravity
    eagle.setImage(assets.image`myImage`)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    eagle.ax = gravity
    eagle.setImage(assets.image`myImage`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.life() > 0) {
        eagle.ax = gravity - THRUST
        eagle.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b f f b . . 1 . . . 
            . . . . . . b b b b . 1 . . . . 
            . . . . . . 4 4 4 4 . . 1 . . . 
            . . . . . b 4 b b 4 b . . . . . 
            . . . . . b . b b . b . . . . . 
            . . . . . 4 . 4 4 . 4 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.life() > 0) {
        eagle.ay = gravity - THRUST
        eagle.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b f f b . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . b 4 b b 4 b . . . . . 
            . . . . . b . b b . b . . . . . 
            . . . . . 4 . 4 4 . 4 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . 1 . . 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    land(2)
})
info.onLifeZero(function () {
    eagle.ax = gravity
})
let eagle: Sprite = null
let THRUST = 0
let gravity = 0
let idle = 0
gravity = 2
THRUST = 10
game.setGameOverEffect(true, effects.slash)
game.setGameOverEffect(false, effects.splatter)
game.setGameOverMessage(true, "THE EAGLE HAS LANDED!")
game.setGameOverMessage(false, "YOU FAILED!")
effects.starField.startScreenEffect()
tiles.setCurrentTilemap(tilemap`level1`)
eagle = sprites.create(assets.image`myImage`, SpriteKind.Player)
eagle.ay = gravity
eagle.setFlag(SpriteFlag.ShowPhysics, true)
scene.cameraFollowSprite(eagle)
info.setLife(5000)
game.onUpdate(function () {
    if (controller.left.isPressed() || controller.right.isPressed() || controller.down.isPressed()) {
        info.changeLifeBy(-10)
        scene.cameraShake(2, 100)
    }
})
