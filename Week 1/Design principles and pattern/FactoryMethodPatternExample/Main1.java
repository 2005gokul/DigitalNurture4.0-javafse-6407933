public class Main1 {
    public static void main(String[] args){
        DocumentFactory factory;
        //word
        factory = new WordDocumentFactory();
        Document word = factory.createDocument();
        word.open();
        word.close();
        //pdf
        factory = new PDFDocumentFactory();
        Document PDF = factory.createDocument();
        PDF.open();
        PDF.close();
        //Excel
        factory = new ExcelDocumentFactory();
        Document Excel = factory.createDocument();
        Excel.open();
        Excel.close();


    }
}
