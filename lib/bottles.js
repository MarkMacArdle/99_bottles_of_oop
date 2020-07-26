import { downTo, capitalize } from './helpers.js';

class Bottles {
    constructor(starting_bottles) {
        this.starting_bottles = starting_bottles
    }

    bottle_str(bottle_count) {
        if (bottle_count > 1) {
            return bottle_count + ' bottles '
        } else if (bottle_count == 1) {
            return bottle_count + ' bottle '
        } else if (bottle_count == 0) {
            return 'no more bottles '
        } else {
            return '99 bottles '
        }
    }

    take_line(bottle_count) {
        if (bottle_count > 0) {
            let subject = (bottle_count > 1) ? 'one' : 'it'
            return 'Take ' + subject + ' down and pass it around, '
        } else {
            return 'Go to the store and buy some more, '
        }
    }

    verse(bottle_count) {
        return (
            capitalize(this.bottle_str(bottle_count)) + 'of beer on the wall, ' +
            this.bottle_str(bottle_count) + 'of beer.\n' +
            this.take_line(bottle_count) +
            this.bottle_str(bottle_count - 1) + 'of beer on the wall.\n'
        )
    }
}

export { Bottles, downTo };
