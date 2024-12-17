const instructor=[
    {name:'nodi',age:28,position:'Senior'},
    {name:'Akil',age:26,position:'junior'},
    {name:'Shobuj',age:30,position:'Senior'}
]
console.log(instructor[0])
let output=instructor.filter((x)=>{
    
    if(x.position === 'Senior'){
        console.log(x.name)
       return x
    }
})
console.log(output)