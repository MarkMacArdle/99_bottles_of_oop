class BottlesSong {
    // constructor(name) {
    //     console.log('hello' + name)
    // }
    sing() {
        for(let i = 9; i > 0; i--){
            console.log(i)
            debugger
            console.log(i + ' bottles of beer on the wall, ' + i + ' bottles of beer')
            console.log('Take one down, pass it around, ' + (i - 1) + ' bottles of beer on the wall')
        }
        console.log('No more bottles of beer')
    }
}

let bottles = new BottlesSong()
console.log('hi')
let x = 2

bottles.sing()
