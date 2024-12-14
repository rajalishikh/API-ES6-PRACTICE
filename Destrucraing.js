//  Object Destructure
 let objet_raj_family={
    name_father:'Abdus salam',
    age_father:55,
    name_mother:"Nurun Nahar begum",
    age_mother:50,
    children_total:'Three',
    First_child:"Barat Ali",
    Second_child:"Raj",
    Third_child:"Sumiya"

 }
 let {name_father:father_name,name_mother,First_child}=objet_raj_family
 console.log(name_mother,father_name)

//  array  Destructure
let array_name=[22,44,66,77]
let [x,y]=array_name
console.log(x,y)
