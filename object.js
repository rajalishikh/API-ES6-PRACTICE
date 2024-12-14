let information_raj={
    full_name:"Md Raj Ali sheikh",
    father_name:"Md Abdus Salam Sheikh",
    age_student:"24",
    marriage_day:"21 may"
}
// find the keys 
 let x=Object.keys(information_raj)
console.log('The all keys name',x)
// find the value 
// let y=Object.values(information_raj)
// console.log('All value name',y)
// How can delete a value in object 
// delete information_raj.father_name
// console.log(information_raj)
// Know about Entries 
let array_of_array=Object.entries(information_raj)
console.log('array of array',array_of_array)
// delete a value using destructure
let {full_name,...new_information}=information_raj
console.log("Delete full name",new_information)
// know about object freeze 
let x2=Object.freeze(information_raj)
information_raj.age_student=22
console.log(information_raj)



