// data access
const data=[{id:2,name:'abdul',address:'kochu khet'}]
// console.log(data[0].address)
const product={
    count:5000,
    data:[
        {id:1,name:'lenevo laptop',price:6500},
        {id:2,name:'macbook',price:76500},
    ]


}
// console.log(product.data[1].price)

const user={
    id:5001,
    name:'shoriful Raj',
    address:{
        street:{
            first:'54/1 uttor side',
            second:"poribag er goli",
            third:"no dorai"
        },
        city: 'dhaka'
    }
}
console.log(user.address.street.second)
 

const user2={
    id:5002,
    name:'pori bibar majar',
    address:{
        city:'chittagong',
        country:"Bangladesh"
    }
}
console.log(user2.address?.street?.second)
 


