// Exercise 1

function Automobile(wheels,doors){
    this.wheels = wheels
    this.setColor =()=> {
        this.color = color
    }
    this.getColor = ()=>{
        return this.color
    }
}

function Sedan(make, model, year){
    this.make = make 
    this.model = model
    this.year = year 
    this.doors = 4
}

function Camry(){

}

Sedan.prototype = new Automobile(4)
Camry.prototype = new Sedan("toyota","camry","2010")
Maybach.prototype = new Maybach ("mercedes", "maybach", "2012")

// var toyota = new Camry()

//exercise 2

function Maybach(){
    
}

class Maybach extends Sedan{
constructor(make,model,year){
super(4)
this.owner = "rickross"
this.price = "expensive"
}
}

var mmg = Maybach()




// class Automobile{
//     constructor(wheels){
//         this.wheels = wheels
//     }
//     setColor(color){
// this.color = color
//     }
//     getColor(){
//         return this.color
//     }
// }

// class Motorcycle extends Automobile{
//     constructor(make, model, year){
//         super(2)
//         this.make = make 
//         this.model = model
//         this.year = year 
//     }
// }
