package test;

import cucumber.api.junit.Cucumber;
import principal.Formulario;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.junit.Assert.*;

public class TestSteps {

    @Before
    public static void setUpBeforeClass() {
        System.out.println(" AMBIENTE DE TESTES");
    }
    
    String nome = "";
    String data = "";
    String texto = "";
    Formulario form;
    String retorno = "";
    String label = "party rock";


    @Dado("^que eu acesse o formulario$")
    public void que_eu_acesse_o_formulario() {
        form = new Formulario();
    }

    @Quando("^eu preencher o campo nome com \"([^\"]*)\" e motivo com \"([^\"]*)\" e a data \"([^\"]*)\"$")
    public void eu_preencher_o_campo_nome_com_e_motivo_com_e_a_data(String arg1, String arg2, String arg3) {
        nome = arg1;
        texto = arg2;
        data = arg3;
    }

    @Quando("^clicar no botão$")
    public void clicar_no_botão()  {
       retorno = form.enviar(nome,texto,data);
    }

    @Entao("^eu devo ver o texto \"([^\"]*)\"$")
    public void eu_devo_ver_o_texto(String arg1) {
        assertEquals(arg1, label );
    }

    @Entao("^eu devo ver a mensagem \"([^\"]*)\"$")
    public void eu_devo_ver_a_mensagem(String arg1) {
        assertEquals(arg1, retorno );
    }


    /// teste com o webdriver

    static WebDriver driver;

    @Dado("^que eu acesse o chrome$")
    public void que_eu_acesse_o_chrome() {
        System.setProperty("webdriver.chrome.driver","chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://www.google.com");
    }

    @Entao("^eu devo ver o texto no chrome \"([^\"]*)\"$")
    public void eu_devo_ver_o_texto_no_chrome(String arg1) {

    }


}
