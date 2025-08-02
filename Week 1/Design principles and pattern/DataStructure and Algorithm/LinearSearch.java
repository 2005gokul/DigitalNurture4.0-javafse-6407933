public class LinearSearch {
    public Product linearSearch(Product[] product, String name){
        for (Product product1 : product) {
            if (product1.productName.equalsIgnoreCase(name)) {
                return product1;
            }
        }
        return null;
    }
}