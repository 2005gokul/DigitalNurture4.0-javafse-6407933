public class Store {
    public static void main(String[] args) {
        Product[] laptop = {new Product(1,560000, "Mac", "Laptop"),
                            new Product(12,567000,"Lenova", "Laptop"),
                            new Product(14,7500,"HP", "Laptop")};

        LinearSearch search = new LinearSearch();
        Product result = search.linearSearch(laptop, "Mac");

        if(result != null){
            System.out.println(result.productName + " : " + result.productPrice);
        }
        else{
            System.out.println("Product is currently unavailable");
        }

        BinarySearchObjectArray bsSearch = new BinarySearchObjectArray();
        int BSresult = bsSearch.binarySearch(laptop, 14);

        if(BSresult != 0){
            System.out.println(laptop[BSresult].productName + " : " + laptop[BSresult].productPrice);
        }
    }
}
