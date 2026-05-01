export class Common {
  static roundingNumber(str, symbol) {
    if (!str) return 0;
    const cleaned = str.replaceAll(symbol, "").trim();
    const num = parseFloat(cleaned);

    return isNaN(num) ? 0 : Number(num.toFixed(2));
  }
}

