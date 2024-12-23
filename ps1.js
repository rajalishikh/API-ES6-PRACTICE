function count(){
    let number_count=0
    return function(){
        number_count++;
        return number_count
    }
}

const final_output=count()
console.log(final_output())
console.log(final_output())
console.log(final_output())
console.log(final_output())
console.log(final_output())