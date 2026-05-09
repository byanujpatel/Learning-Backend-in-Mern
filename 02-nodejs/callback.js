// Self Invoked Function (IIFE)

(function () {
    console.log('Anuj is writing callback function which is self invoked')
})()


function cb() {
    console.log("I am a callback function")
}

function add(a, b, cb) {
    let result = a + b
    console.log("Result", result) // main function work complete
    cb() // callback function called
}

add(100,4,cb)

// Miniature Version
add(10, 3, () => console.log("I am callback function"))




