public class Logger{
    private static volatile Logger setInstance = null;

    private Logger(){
        System.out.println("Logger is initialised");
    }

    public static Logger getInstance(){
        if(setInstance==null){
            synchronized(Logger.class){
                if(setInstance==null){
                    setInstance=new Logger();
                }
            }
        }
        return setInstance;
    }
}