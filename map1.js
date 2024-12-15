// learn about map 
let x =[22,33,5,8,]
let new_array=[]
for(let array of x ){
    console.log(array)
    let output=array*2
    new_array.push(output)   
}
console.log(new_array)

function double(num){
    console.log('Each number',num)
    return num*2
}
let output=x.map(double)
console.log(output)