package test;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;

public class TestStepsGoogle {

    static WebDriver driver;

    public static void iniciaDriverChrome(){
        System.setProperty("webdriver.chrome.driver","chromedriver.exe");
        driver = new ChromeDriver();
    }

    @Dado("^que eu acesse o formulario de pesquisa$")
    public void que_eu_acesse_o_formulario_de_pesquisa(){
        iniciaDriverChrome();
        driver.get("https://www.google.com");
    }

    @Quando("^eu executar uma pesquisa por \"([^\"]*)\"$")
    public void eu_executar_uma_pesquisa_por(String arg1){
        WebElement campoPesquisado = driver.findElement(By.name("q"));
        campoPesquisado.clear();
        campoPesquisado.sendKeys(arg1);
        campoPesquisado.submit();
    }

    @Então("^o resultado deve apresentar \"([^\"]*)\"$")
    public void o_resultado_deve_apresentar(String arg1) throws Throwable {
        List<WebElement> campos = driver.findElements(By.tagName("span"));
        boolean encontrado = false;
        for (WebElement we: campos) {
            if(we.getText().contains(arg1)){
                encontrado = true;
            }
        }
        Assert.assertEquals(true, encontrado);
    }
}
