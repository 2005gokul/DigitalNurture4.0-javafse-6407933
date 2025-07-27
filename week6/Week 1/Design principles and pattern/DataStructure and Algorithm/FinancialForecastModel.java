public class FinancialForecastModel {

    // Recursive method to calculate future value
    public static double futureValueRecursive(double pv, double r, int n) {
        if (n == 0) {
            return pv;
        }
        return (1 + r) * futureValueRecursive(pv, r, n - 1);
    }

    public static void main(String[] args) {
        double presentValue = 700; // Initial amount
        double growthRate = 0.10;   
        int years = 15;             // Forecast for 15 years

        double futureValue = futureValueRecursive(presentValue, growthRate, years);
        System.out.printf("Future value after %d years: $%.2f%n", years, futureValue);
    }
}
