// ALert Function is Used to Popup the Output that written In Dobule Quotation
// alert("Hello World")

//Console.log used for debugging process
// console.log("Hello World")

//Document.write used to write the text inside the Html body
// document.write("Hello World")

// Declaration Of  Variables

// String
// var Name = "Sameem"

//Number
// var age = 20
// var price = 21.55

//Boolean
// var male = true

//Typeof is used to show the type of variable
// console.log(typeof(Name))
// console.log(typeof(age))
// console.log(typeof(price))
// console.log(typeof(male))


//Classess
 class Car {
     constructor(Name, Model){
         this.Name = Name
         this.Model = Model
     }
     display(){
         console.log(`This is ${this.Name}. and Its Model is ${this.Model}`)
     }
 }
 class Honda extends Car{
    constructor(Name, Model){
        super()
        this.Name = Name
        this.Model = Model
    }
 }
 let obj = new Honda("Honda",2015)

 console.log(obj.display())

