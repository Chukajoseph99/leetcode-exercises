
var maxProfit = function(prices) {
    let profits = 0;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < prices[i + 1]){
            profits += prices[i + 1] - prices[i];
        }
    }
    return profits;
};