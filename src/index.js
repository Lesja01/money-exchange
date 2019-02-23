
 module.exports=function makeExchange(currency) {
     let num=currency;
     let result={};
     if(num>10000){
         result= {error: "You are rich, my friend! We don't have so much coins for exchange"}        
        }else if(num>0){
            var H=Math.floor (num/50);
            if (H!=0){result={"H": H};};
            num=num-50*H;
            var Q=Math.floor(num/25);
            if (Q!=0){
                Object.assign(result, {"Q": Q});
                };
            num=num-25*Q;
            var D=Math.floor(num/10);
            if (D!=0){result={...result,"D": D}};
            num=num-10*D;
            var N=Math.floor(num/5);
            if (N!=0){result={...result,"N": N}};
            num=num-5*N;
            var P=Math.floor(num/1);
            if (P!=0){result={...result,"P": P}};
        }else {
            result={};
        }
        
     return result;
    
}


