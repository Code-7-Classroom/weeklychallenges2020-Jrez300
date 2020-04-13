// VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Note: You may assume that you have an infinite number of each kind of coin.



function findCoins (coins, totalAmount){
    var coins = [1, 2, 5]; //given coins
    coins.sort((a, b) => b - a);//sort coins in descending order, biggest coin first

    var totalAmount = 11; // target amount
    
    var totalCoins = 0; // placeholder 0

    for (var i = 0; i < coins.length; i++){

       var loopedTotalCoins = Math.floor(totalAmount/coins[i]) // target amount divided by the current coin in array, rounded to whole number // 2

       totalCoins = totalCoins + loopedTotalCoins // 0 + loopedTotalCoins // 2

       totalAmount = totalAmount - loopedTotalCoins * coins[i] //target - loopedTotalCoins * current coin in array //11 - 2 * 5 = 1 
    }

    if (totalAmount === 0) { 
        return totalCoins;

    } else {

        return -1;
    }


}
console.log(findCoins())


//******** DISCLAIMER: I had mentor walk me through this one, I couldnt figure it out*************/