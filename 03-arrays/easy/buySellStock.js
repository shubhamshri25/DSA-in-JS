//! You are given an array prices where prices[i] is the price of a given stock on the ith day.

//! You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

//! Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//Brute Force Solution
function buySellStocks(arr) {
  let maxProfit = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const profit = arr[j] - arr[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
}

console.log(buySellStocks([7, 6, 4, 3, 1]));

//Time Complexity: O(n²) & Space Complexity: O(1)

//Optimized Solution
function buySellStocksOptimal(arr) {

  let maxProfit = 0;
  let min = arr[0];
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] - min > maxProfit) {
      maxProfit = arr[i] - min;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return maxProfit;
}

console.log(buySellStocksOptimal([7, 6, 4, 3, 1, 3, 9]));

//? approah:
//? 1. Initialize maxProfit to 0 and min to the first element of the array.
//? 2. Iterate through the array.
//? 3. For each element, check if the profit (current price - min) is greater than maxProfit.
//? 4. If it is, update maxProfit.
//? 5. If the current price is less than min, update min to the current price.
//Time Complexity: O(n) & Space Complexity: O(1)
