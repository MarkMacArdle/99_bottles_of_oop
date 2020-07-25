import { downTo } from './helpers.js';

class Bottles {
    constructor(starting_bottles) {
        this.starting_bottles = starting_bottles
    }
    verse(bottles) {
        console.log(bottles + ' bottles of beer on the wall, ' + bottles + ' bottles of beer')
        console.log('Take one down, pass it around, ' + (bottles - 1) + ' bottles of beer on the wall')
    }
    test() {
        console.log(downTo(9, 3))
    }
}

export { Bottles };
