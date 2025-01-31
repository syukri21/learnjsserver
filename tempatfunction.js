
function panggil(nama) {
    // .. 
    console.log("Hallo " + nama)
}

function testPanggil(functionParam) {
    return functionParam("saya", "budi");
}

class Person {
    name = "default"

    constructor(name) {
        this.name=name
    }

    panggil(){
        var nama = "joni"
        console.log("ini "+ nama)
        console.log("ooy " + this.name)
    }
}


export {panggil, testPanggil, Person}