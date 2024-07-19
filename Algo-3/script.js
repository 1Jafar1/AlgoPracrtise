function Sum(){
let sum=0
for(i=100 ; i<1000 ; i+=1){
    if(i%7==0 && i%8==0)
        sum+=i

}
return sum
}

console.log(Sum())
