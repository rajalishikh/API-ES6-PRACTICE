// know about spread operator 
let max_number=Math.max(2,5,7,8,9)
console.log(max_number)

let max_array=Math.max(...[1,2,55,77,88])
console.log(max_array)

let friends=[22,44,77,88,99]
let dsto=friends
let bondhu=[...friends]
let push_item=friends.push(500)
console.log(dsto)
console.log(friends)
console.log("After add spred operator",bondhu)