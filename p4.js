// arrow function for minus formula 
let minus=(a,b)=>a-b
console.log(minus(22,33))
// arrow function for multiplication \
let multiplication =(a,b,c)=>a*b*c
console.log(multiplication(22,2,2))
// find the obj value 

let get_age=(obj_value)=>obj_value.age;
let the_obj={name:'raj',age:25}
const age=get_age(the_obj)
console.log(age)
// find the array value using array function 

let get_value=(array)=>array[2]
let array_value=[1,2,3]
const call_get_value=get_value(array_value)
console.log(call_get_value)

// right a arrow function with multiply line 

let many_lines=(value1,value2,)=>{
    let sum =value1+value2;
    let sum2x=sum*2;
    console.log(sum2x)
    return sum2x
}
many_lines(2,2)
