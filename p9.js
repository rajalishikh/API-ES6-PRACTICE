let find_even_friend=(array)=>{
    let even_array=[]
    for(let x of array){
        if(x.length %2 == 0){
            even_array.push(x)
        }
    }
    return even_array
    

}
 let final_output=find_even_friend(['Arif',"jihat","shopon","Rana","siam","Raeel","nosib",'Ornove',"mughdo","Refat","refat school",'Atik'])
 console.log(final_output)