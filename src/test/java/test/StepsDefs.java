package test;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.springframework.beans.factory.annotation.Autowired;
import principal.NameSplitService;

public class StepsDefs extends SpringIntegrationTest{

    @Autowired
    private NameSplitService service;

    private String[] result = null;

    @When("the service is called passing {string}")
    public void the_service_is_called_passing(String string) {
        result = service.splitName(string);
    }
    @Then("the service will returns {string} , {string} and {string} separated")
    public void the_service_will_returns_and_separated(String string, String string2, String string3) {
        Assert.assertEquals(3,result.length);
        Assert.assertEquals(result[0],string);
        Assert.assertEquals(result[1],string2);
        Assert.assertEquals(result[2],string3);
    }
}
