package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        // ✅ Load the Spring configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // ✅ Get the BookService bean
        BookService bookService = (BookService) context.getBean("bookService");

        // ✅ Call the method
        bookService.displayBook();  // Should print: Book: Clean Code by Robert C. Martin
    }
}
