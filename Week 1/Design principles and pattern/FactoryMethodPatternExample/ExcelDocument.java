public class ExcelDocument implements Document{
     @Override
    public void open(){
        System.out.println("open the Excel Document...");
    }
    @Override
    public void close(){
        System.out.println("close the Excel Document");
    }
}
