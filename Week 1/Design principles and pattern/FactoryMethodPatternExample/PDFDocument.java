

public class PDFDocument implements Document {
    @Override
    public void open(){
        System.out.println("open the PDF Document...");
    }
    @Override
    public void close(){
        System.out.println("close the PDF Document");
    }
}
