public class WordDocument implements Document {
     @Override
    public void open(){
        System.out.println("open the Word Document...");
    }
    @Override
    public void close(){
        System.out.println("close the Word Document");
    }
}
