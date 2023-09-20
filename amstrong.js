var c = 0;
for(i=1;i<=1000;i++){
    var num = i;
    c=0
    while(num != 0){
        var x = num % 10;
        c += x*x*x
        num = parseInt(num/10)
    }
    if (c == i) {
        console.log(i)
    }
}