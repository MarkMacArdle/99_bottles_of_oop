import {Bottles, downTo} from './bottles.js'

let x = new Bottles(9)
console.log('x is obj')

downTo(4, 2).forEach(function (entry) {
    let y = x.verse(entry)
    console.log(y)
})
console.log('end')