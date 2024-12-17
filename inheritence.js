class Car{
    constructor(name,price){
        this.name=name;
        this.price=price

    }
    journey(){
        console.log('gari chole na chole na chole na re')
    }
}

class Bus extends Car{
    constructor(name,price,seat,location){
        super(name,price);
        this.seat=seat;
        this.location=location

    }
    go(){
        console.log("Dhaka to Sirajganj")
    }
}
let output1=new Bus('pori','2000','40',"dhaka to sirajganj")
console.log(output1)