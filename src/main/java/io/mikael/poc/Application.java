package io.mikael.poc;

import com.google.common.collect.ImmutableMap;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.OffsetDateTime;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

@SpringBootApplication
@RestController
public class Application {

    private AtomicLong counter = new AtomicLong();

    @RequestMapping("/api/hello")
    public Map<String, String> hello() {
        return ImmutableMap.of(
                "name", "World",
                "counter", Long.toString(counter.getAndIncrement()),
                "timestamp", OffsetDateTime.now().toString()
        );
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
