public class Product {
    public static int id;
    public int productid;
    public int productPrice;
    public String productName;
    public String category;

    public Product(int productid,int productPrice, String productName, String category){
        this.productPrice = productPrice;
        this.productid = productid;
        this.productName = productName;
        this.category = category;
    }

}
