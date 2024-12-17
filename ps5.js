let array=[33,50,79,78,90,101,30]
let output2=array.filter((x)=>{
    if(x %10 == 0){
        return x
    }
})
console.log(output2)
let output=array.find((x)=>{
    if(x %10 == 0){
       return x
    }
})
console.log(output)