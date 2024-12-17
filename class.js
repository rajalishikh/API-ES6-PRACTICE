// let know about class  
// so much learn to enjoy
class Product{
    country='Bangladesh'
    constructor(name,price){
        this.name=name;
        this.price=price

    }

    speak(talk){
        console.log(talk)

    }
}
let output=new Product("Walton",2200)
// console.log(output)
// output.speak('O ma rice dao')
// output.speak('huda rice khabo na ')
// make teacher
class Teacher{
    constructor(name,subject){
        this.name=name;
        this.subject=subject

    }
    lecture(){
        console.log("Sir teach us ery well")

    }
}
let output2=new Teacher('Polash',"Physices")
console.log(output2)
output2.lecture()
let output3=new Teacher('Johurul',"CHamestry")
console.log(output3)
output2.lecture()
