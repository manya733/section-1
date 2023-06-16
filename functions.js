function checkEven(n){
    var msg = 'function scoped';
    if(n%2==0)
    {
        console.log('even');
    }
    else{
        console.log('odd');
    }
}
checkEven(457);

//console.log(msg);

const getAvg = function(n1,n2,n3)
{
    const avg=(n1+n2+n3)/3;

    console.log(avg);

};

getAvg(10,20,30);

//create a function to provide fibonacci series
const printFibo= function(num)
{
    let[a,b]=[0,1];
   

    console.log(0);
    console.log(1);

    while(true){
        const c=a+b;
        if(c>num) break;
        console.log(c);
        
        [a,b]=[b,c]
    }



    };
    printFibo(20);

