var prices = [1,12,5,111,200,1000,10]
var k = 50
var sum = 0
var nuevo = []
var arrOrd =  prices.sort((a,b) => a > b ? 1 : -1);  
    
arrOrd.forEach(function (element){       
    sum += element
    if(sum<=k){
        nuevo.push(element)
    }
    console.log(nuevo.length)
});


