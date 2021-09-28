let n =12;
count =0;
for (let i =1 ; i<=n ; i++){
    if(n%i==0){
        count ++;
    }
}
if(count ==2){
    console.log("Its a prime Number");
}
else{
    console.log("Its not a prime Number");
}