int calculateFinalPrice(double basePrice, double markupPercentage) {
  // EJ: basePrice = 154300, markupPercentage = 0.05 (5%)
  double rawPrice = basePrice * (1 + markupPercentage);
  
  // Redondeo matemático al billete/moneda de mil más cercana (Formato Peso Colombiano)
  // EJ: 162015 -> 162.015 -> round() = 162 -> 162000
  int roundedToThousand = ((rawPrice / 1000).round() * 1000);
  
  return roundedToThousand;
}
