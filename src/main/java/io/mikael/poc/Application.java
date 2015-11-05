package io.mikael.poc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@SpringBootApplication
@RestController
public class Application {

    @RequestMapping("/api/yo")
    public Map<String, String> apiYo() {
        return Collections.singletonMap("yo", "there");
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
