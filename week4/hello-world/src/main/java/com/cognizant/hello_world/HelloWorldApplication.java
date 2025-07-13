package com.cognizant.hello_world;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HelloWorldApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(HelloWorldApplication.class);

	public static void main(String[] args) {
		LOGGER.info("Starting HelloWorldApplication");
		SpringApplication.run(HelloWorldApplication.class, args);
	}
}

