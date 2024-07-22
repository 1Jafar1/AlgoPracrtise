
let word='Cefer'
function R(rev){
    let reverse=''
    for(let i = rev.length-1 ; i>=0 ; i-- ) {
    reverse+=rev[i]
}
return reverse
}
console.log(R(word))