
public class main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();
        System.out.println("logger1 and logger2 refer the same object" + (logger1==logger2));
    }
}
