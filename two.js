let two_array_add=(x,y)=>{
    let two_array=[]
    for(let first of x){
        two_array.push(first)
    }
    for(let second of y){
        two_array.push(second)
    }
   let big_number=Math.max(...two_array)
   return big_number

}
let final_output= two_array_add([33,55,77,88,88],[1,2,3,4,5,780])
console.log("The big number",final_output)