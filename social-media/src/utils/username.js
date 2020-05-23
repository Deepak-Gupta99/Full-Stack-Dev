const ADJECTIVES = [
    'boundless',
    'plausible',
    'sleepy',
    'electronic',
    'dangerous',
    'slim',
    'purple',
]

const OBJECTS = [
    'puddle',
    'piano',
    'window',
    'bowl',
    'socks',
    'brocolli',
    'chalk'
]

function genRandomUsername(){
    const abj = ADJECTIVES[Math.floor(Math.random()* 7)]
    const obj = OBJECTS[Math.floor(Math.random()*7)]
    return `${abj}-${obj}`
}
module.exports = {
    genRandomUsername
}