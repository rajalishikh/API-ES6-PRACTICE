let products=[
    {id:1,name:"walton",prize:20000},
    {id:2,name:"bangla",prize:340000},
    {id:3,name:"xiomi",prize:120000},
    {id:4,name:"Apple",prize:500000}
]
let new_product1=products.map(product=>product.name)
console.log(new_product1)
let newProduct2=products.forEach(product2=>{
    let x=product2.prize
    console.log(x)
})


