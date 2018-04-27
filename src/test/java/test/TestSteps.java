package test;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class TestSteps {
   
    static String inputNome = "//label[text() = 'Qual é seu nome? ']/following-sibling::div/div/input";
    static String inputData = "//label[text() = 'Qual é a data do seu nascimento? ']/following-sibling::div/input";
    static String inputTexto = "//label[text() = 'Porque você ingressou na área de testes? ']/following-sibling::div/textarea";
    static String feedBackNome = "//label[text() = 'Qual é seu nome? ']/following-sibling::div[2]";
    static String feedBackData = "//label[text() = 'Qual é a data do seu nascimento? ']/following-sibling::div[2]";
    static String feedBackTexto = "//label[text() = 'Porque você ingressou na área de testes? ']/following-sibling::div[2]";
    
    String retorno = "";
    String label = "party rock";
    static WebDriver driver;
    static WebDriverWait wait;

    public static void iniciaDriverChrome(){
        System.setProperty("webdriver.chrome.driver","chromedriver.exe");
        driver = new ChromeDriver();    	
    }
    
    public static void iniciaDriverFirefox(){
        System.setProperty("webdriver.gecko.driver","geckodriver.exe");
        driver = new FirefoxDriver();    	
    }
    
    @Dado("^que eu acesse o formulario$")
    public void que_eu_acesse_o_formulario() {
    	iniciaDriverChrome();
        driver.get("https://forms.liferay.com/web/forms/shared/-/form/372406");
    }

    @Quando("^eu preencher o campo nome com \"([^\"]*)\" e motivo com \"([^\"]*)\" e a data \"([^\"]*)\"$")
    public void eu_preencher_o_campo_nome_com_e_motivo_com_e_a_data(String arg1, String arg2, String arg3) {
    	wait = new WebDriverWait(driver, 10);    	
    	wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath("//*")));
    	
    	WebElement campoTexto = driver.findElement(By.xpath(inputTexto));
    	campoTexto.sendKeys(arg2);

    	WebElement campoData = driver.findElement(By.xpath(inputData));
    	campoData.sendKeys(arg3);
    	
    	WebElement campoNome = driver.findElement(By.xpath(inputNome));
    	campoNome.sendKeys(arg1);
    }

    @Quando("^clicar no botão$")
    public void clicar_no_botão() throws InterruptedException {
    	
    	//aparentemente o selenium esta com problemas com o metodo click (verifiquei na internet)
    	//WebElement elemento = driver.findElement(By.xpath("//button[text() = 'Submit']"));
    	//elemento.click();

    }
    
    @Quando("^submeter o formulario$")
    public void submeter_o_formulario() throws InterruptedException {
    	
    	WebElement elemento = driver.findElement(By.xpath("//form[1]"));
    	elemento.submit();
    }

    @Entao("^eu devo ver o texto \"([^\"]*)\"$")
    public void eu_devo_ver_o_texto(String arg1) {
    	driver.findElement(By.xpath("//*[contains(text(),'"+arg1+"')]"));
    	driver.quit();
    }
    
    @Entao("^eu devo ver a mensagem \"([^\"]*)\"$")
    public void eu_devo_ver_a_mensagem(String arg1) throws InterruptedException {
    	wait = new WebDriverWait(driver, 10);
    	String resposta = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'"+arg1+"')]"))).getText();
        assertEquals(arg1, resposta );
        driver.quit();
    }
    
    @Entao("^eu devo ver a mensagem de erro no campo nome \"([^\"]*)\"$")
    public void eu_devo_ver_a_mensagem_de_erro_no_campo_nome(String arg1){
    	wait = new WebDriverWait(driver, 10);
    	String resposta = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(feedBackNome))).getText();
        assertEquals(arg1, resposta );
        driver.quit();
    }
    
    @Entao("^eu devo ver a mensagem de erro no campo data \"([^\"]*)\"$")
    public void eu_devo_ver_a_mensagem_de_erro_no_campo_data(String arg1) throws Throwable {
    	wait = new WebDriverWait(driver, 10);
    	String resposta = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(feedBackData))).getText();
        assertEquals(arg1, resposta );
        driver.quit();
    }
    
    @Entao("^eu devo ver a mensagem de erro no campo texto \"([^\"]*)\"$")
    public void eu_devo_ver_a_mensagem_de_erro_no_campo_texto(String arg1) throws Throwable {
    	wait = new WebDriverWait(driver, 10);
    	String resposta = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(feedBackTexto))).getText();
        assertEquals(arg1, resposta );
        driver.quit();
    }
    
    @Entao("^eu devo ver a mensagem de erro em todos os campos \"([^\"]*)\"$")
    public void eu_devo_ver_a_mensagem_de_erro_em_todos_os_campos(String arg1) throws Throwable {
    	WebDriverWait wait = new WebDriverWait(driver, 10);
    	String resposta1 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(feedBackNome))).getText();
    	String resposta2 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(feedBackData))).getText();
    	String resposta3 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(feedBackTexto))).getText();
        
    	assertEquals(arg1, resposta1 );
    	assertEquals(arg1, resposta2 );
    	assertEquals(arg1, resposta3 );
    	
    	driver.quit();
    }

}
