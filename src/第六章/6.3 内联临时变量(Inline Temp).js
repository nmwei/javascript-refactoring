class InlineTemp{
  fn() {
    const basePrice = this.anOrder.basePrice();
    return basePrice > 1000
  }
}