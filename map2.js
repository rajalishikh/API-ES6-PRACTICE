// double each number 
let some_number=[1,2,3,4,5,67,]
let double=some_number.map((double_result)=>{
    console.log("Each number",double_result)
    return double_result*2
})
console.log(double)
// add 2 each number 
let add_2=some_number.map((add)=>add+2)
console.log("add every number",add_2)

//multiplication each number into 5
let multiplication=some_number.map((multi)=>multi*5)
console.log("multiplication",multiplication)
// divide each number using map
let divide=some_number.map((divide)=>divide/2)
console.log('Divide each number',divide) 

// find the length each number 

let my_friends=['shopon',"arif"]
let find_length=my_friends.map((friend)=>friend.length)
console.log("Each name length",find_length)
let find_length2=my_friends.map((friend2)=>friend2[0])
console.log("Each name First latter",find_length2)
