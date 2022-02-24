namespace SpriteKind {
    export const moneda = SpriteKind.create()
    export const floreta = SpriteKind.create()
    export const butó = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Charli.vy = -220
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Charli.vy == 0) {
        Charli.vy = -165
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    level += 2
    nivell()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
function nivell () {
    info.setLife(3)
    Charli = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f b b f f f . . . . 
        . . . f f f b b b b f f f . . . 
        . . f f f c c c c c c f f f . . 
        . . f f c b b b b b b c c f . . 
        . . f c b f f f f f f b c f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f 1 f d d f 1 f e f f . 
        . f e e d 1 f d d f 1 d e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e d d d d e e f . . . 
        . . 2 2 f 2 2 2 2 2 2 f 2 2 . . 
        . . d d f 2 2 2 2 2 2 f d d . . 
        . . d d f 4 4 5 5 4 4 f d d . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    if (level == 0) {
        tiles.setTilemap(tilemap`level2`)
    } else if (level == 1) {
        tiles.setTilemap(tilemap`level4`)
    } else if (level == 2) {
        tiles.setTilemap(tilemap`level5`)
    } else {
        game.over(true, effects.confetti)
    }
    tiles.placeOnRandomTile(Charli, assets.tile`myTile18`)
    level = 0
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
    enemic = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    enemic,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........fffff1b1f.......
        ........fb111cfbf.......
        ........ffb1b1ff........
        ......f.fffbfbf.........
        ......ffffffff..........
        .......fffff............
        ........................
        ........................
        ........................
        ........................
        `],
    500,
    true
    )
    enemic.setPosition(Charli.x + 80, Charli.y + 80)
    enemic.follow(Charli, 30)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.moneda, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.disintegrate, 500)
    music.baDing.play()
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let enemic: Sprite = null
let level = 0
let Charli: Sprite = null
Charli = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f b b f f f . . . . 
    . . . f f f b b b b f f f . . . 
    . . f f f c c c c c c f f f . . 
    . . f f c b b b b b b c c f . . 
    . . f c b f f f f f f b c f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f 1 f d d f 1 f e f f . 
    . f e e d 1 f d d f 1 d e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e d d d d e e f . . . 
    . . 2 2 f 2 2 2 2 2 2 f 2 2 . . 
    . . d d f 2 2 2 2 2 2 f d d . . 
    . . d d f 4 4 5 5 4 4 f d d . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Charli, 150, 0)
scene.setBackgroundImage(assets.image`forest22222222222`)
Charli.ay = 265
tiles.setTilemap(tilemap`level2`)
tiles.placeOnRandomTile(Charli, assets.tile`myTile18`)
scene.cameraFollowSprite(Charli)
game.onUpdate(function () {
    Charli.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f b b f f f . . . . 
        . . . f f f b b b b f f f . . . 
        . . f f f c c c c c c f f f . . 
        . . f f c b b b b b b c c f . . 
        . . f c b f f f f f f b c f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f 1 f d d f 1 f e f f . 
        . f e e d 1 f d d f 1 d e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e d d d d e e f . . . 
        . . 2 2 f 2 2 2 2 2 2 f 2 2 . . 
        . . d d f 2 2 2 2 2 2 f d d . . 
        . . d d f 4 4 5 5 4 4 f d d . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    if (Charli.vx < 0) {
        Charli.image.flipX()
    }
    if (Charli.vy < 0) {
        Charli.setImage(img`
            . . . . . f f f f f f . . . . . 
            . . . f f c c c c f b f . . . . 
            . . f f c c c c f b b b f . . . 
            . . f c c c f f c c c c f . . . 
            . . f f f f c c b b b b c f . . 
            . . f c b b b f f f f c c f . . 
            . f f f f f f f e e e f f f . . 
            . f f e e e e 1 f d d e e f . . 
            . f e e e d d 1 f d d e f f . . 
            . . f e e e d d d d d f d d f . 
            . . . f f e e d e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . . e 2 2 2 e d d e b f . . 
            . . . . f 4 4 4 f e e f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
    } else if (Charli.vy < 0) {
        Charli.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `)
    } else if (Charli.x % 2 == 0) {
    	
    } else {
    	
    }
})
