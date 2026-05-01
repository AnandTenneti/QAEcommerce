export class Utilities {

    async verifyPricesDescending() {
    const prices = await this.getAllPrices();

    for (let i = 0; i < prices.length - 1; i++) {
        console.log(`Comparing ${prices[i]} >= ${prices[i + 1]}`);

        expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
    }
}







    
}