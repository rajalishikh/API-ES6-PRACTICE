let numbers=[1,3,4,5,6,7,9,8,18]
let result=numbers.forEach(each=>{
    let output=each*2
    console.log(output)
})
console.log(result)
// Know about filter method
let output2=numbers.filter(c=>c%2 == 0)
console.log("know about filter",output2)
// know about find method 
let output3=numbers.find(c=>c%2 == 0)
console.log("know about find",output3)
