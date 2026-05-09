const fs = require("fs")
const os = require("os")
const lodash = require("lodash")
// Require fs and os lib

let user = os.userInfo()
console.log(user)
console.log(user.username)

fs.appendFile("note.txt","Hi I am in Super30 & my name is "+ user.username + "!\n",()=>{
    console.log("Note.txt file is created")
});

// console.log(os)
// console.log(fs)

let data = ['person1','person2','person1','person3']
console.log(lodash.uniq(data))
console.log(lodash.isString("Golang"))