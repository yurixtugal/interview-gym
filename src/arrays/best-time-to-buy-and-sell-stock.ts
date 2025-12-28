/**
 * LeetCode 121 - Best Time to Buy and Sell Stock
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * @example
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 *
 * @example
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 *
 * @param prices - Array of stock prices where prices[i] is the price on day i
 * @returns Maximum profit achievable, or 0 if no profit is possible
 *
 * Constraints:
 * 1 <= prices.length <= 10^5
 * 0 <= prices[i] <= 10^4
 *
 * Time Complexity: O(n) - Single pass through the array
 * Space Complexity: O(1) - Constant space usage
 */

export function maxProfit(prices: number[]): number {
    if (!prices || prices.length ===0) return 0
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        const currentProfit = prices[i] - minPrice;
        maxProfit = Math.max(currentProfit,maxProfit);
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit
}