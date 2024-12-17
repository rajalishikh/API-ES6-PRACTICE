const people=[
    {name:'mena',age:20},
    
    {name:'Rina',age:15},
    {name:'Shucona',age:22},
]
let output=people.reduce((total,num)=>total+num.age,0)
console.log(output)