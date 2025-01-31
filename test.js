import {testPanggil, Person} from "./tempatfunction.js"
var nama = "Saya"

testPanggil((p1, p2) => {
    console.log("Hallo" + p1 + p2)
})

var p1 = new Person("Sanjaya")

p1.panggil()

