function reverse(number){
    if(number <10){
        console.log(number);
        return;
    }else{
        console.log(number%10);
        reverse(parseInt(number/10));


    }
}
reverse(123789);