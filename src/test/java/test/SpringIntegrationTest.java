package test;

import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import principal.Application;

@CucumberContextConfiguration
@SpringBootTest(classes = Application.class)
public class SpringIntegrationTest {
}
