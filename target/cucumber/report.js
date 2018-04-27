$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Form.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Formulario",
  "description": "Com o objetivo de implementar um desafio",
  "id": "formulario",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 11,
  "name": "Validar obrigatoriedade do campo nome",
  "description": "",
  "id": "formulario;validar-obrigatoriedade-do-campo-nome",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 12,
  "name": "que eu acesse o formulario",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "eu preencher o campo nome com \"\" e motivo com \"Por gostar muito de tecnologia\" e a data \"12/12/1981\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "submeter o formulario",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "eu devo ver a mensagem de erro no campo nome \"This field is required.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "TestSteps.que_eu_acesse_o_formulario()"
});
formatter.result({
  "duration": 19457925735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 31
    },
    {
      "val": "Por gostar muito de tecnologia",
      "offset": 47
    },
    {
      "val": "12/12/1981",
      "offset": 89
    }
  ],
  "location": "TestSteps.eu_preencher_o_campo_nome_com_e_motivo_com_e_a_data(String,String,String)"
});
formatter.result({
  "duration": 4534888252,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.submeter_o_formulario()"
});
formatter.result({
  "duration": 205642282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This field is required.",
      "offset": 46
    }
  ],
  "location": "TestSteps.eu_devo_ver_a_mensagem_de_erro_no_campo_nome(String)"
});
formatter.result({
  "duration": 8299902432,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validar obrigatoriedade do campo data de nascimento",
  "description": "",
  "id": "formulario;validar-obrigatoriedade-do-campo-data-de-nascimento",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 18,
  "name": "que eu acesse o formulario",
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "eu preencher o campo nome com \"Tiago\" e motivo com \"Por gostar muito de tecnologia\" e a data \"\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "submeter o formulario",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "eu devo ver a mensagem de erro no campo data \"This field is required.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "TestSteps.que_eu_acesse_o_formulario()"
});
formatter.result({
  "duration": 13341554284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiago",
      "offset": 31
    },
    {
      "val": "Por gostar muito de tecnologia",
      "offset": 52
    },
    {
      "val": "",
      "offset": 94
    }
  ],
  "location": "TestSteps.eu_preencher_o_campo_nome_com_e_motivo_com_e_a_data(String,String,String)"
});
formatter.result({
  "duration": 3955150889,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.submeter_o_formulario()"
});
formatter.result({
  "duration": 183967617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This field is required.",
      "offset": 46
    }
  ],
  "location": "TestSteps.eu_devo_ver_a_mensagem_de_erro_no_campo_data(String)"
});
formatter.result({
  "duration": 2463069370,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Validar obrigatoriedade do campo de texto",
  "description": "",
  "id": "formulario;validar-obrigatoriedade-do-campo-de-texto",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 24,
  "name": "que eu acesse o formulario",
  "keyword": "Dado "
});
formatter.step({
  "line": 25,
  "name": "eu preencher o campo nome com \"Tiago\" e motivo com \"\" e a data \"12/12/1981\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "submeter o formulario",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "eu devo ver a mensagem de erro no campo texto \"This field is required.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "TestSteps.que_eu_acesse_o_formulario()"
});
formatter.result({
  "duration": 11393441492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiago",
      "offset": 31
    },
    {
      "val": "",
      "offset": 52
    },
    {
      "val": "12/12/1981",
      "offset": 64
    }
  ],
  "location": "TestSteps.eu_preencher_o_campo_nome_com_e_motivo_com_e_a_data(String,String,String)"
});
formatter.result({
  "duration": 1808510714,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.submeter_o_formulario()"
});
formatter.result({
  "duration": 124423626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This field is required.",
      "offset": 47
    }
  ],
  "location": "TestSteps.eu_devo_ver_a_mensagem_de_erro_no_campo_texto(String)"
});
formatter.result({
  "duration": 10169939070,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //label[text() \u003d \u0027Porque você ingressou na área de testes? \u0027]/following-sibling::div[2] (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat test.TestSteps.eu_devo_ver_a_mensagem_de_erro_no_campo_texto(TestSteps.java:114)\r\n\tat ✽.Então eu devo ver a mensagem de erro no campo texto \"This field is required.\"(Form.feature:27)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //label[text() \u003d \u0027Porque você ingressou na área de testes? \u0027]/following-sibling::div[2]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-H89OSS8\u0027, ip: \u0027192.168.15.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat test.TestSteps.eu_devo_ver_a_mensagem_de_erro_no_campo_texto(TestSteps.java:114)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 29,
  "name": "Validar obrigatoriedade de todos os campos",
  "description": "",
  "id": "formulario;validar-obrigatoriedade-de-todos-os-campos",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 30,
  "name": "que eu acesse o formulario",
  "keyword": "Dado "
});
formatter.step({
  "line": 31,
  "name": "eu preencher o campo nome com \"\" e motivo com \"\" e a data \"\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 32,
  "name": "submeter o formulario",
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "eu devo ver a mensagem de erro em todos os campos \"This field is required.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "TestSteps.que_eu_acesse_o_formulario()"
});
formatter.result({
  "duration": 11599548856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 31
    },
    {
      "val": "",
      "offset": 47
    },
    {
      "val": "",
      "offset": 59
    }
  ],
  "location": "TestSteps.eu_preencher_o_campo_nome_com_e_motivo_com_e_a_data(String,String,String)"
});
formatter.result({
  "duration": 1130057232,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.submeter_o_formulario()"
});
formatter.result({
  "duration": 157196253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This field is required.",
      "offset": 51
    }
  ],
  "location": "TestSteps.eu_devo_ver_a_mensagem_de_erro_em_todos_os_campos(String)"
});
formatter.result({
  "duration": 2172134342,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Enviar formulario corretamente",
  "description": "",
  "id": "formulario;enviar-formulario-corretamente",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 36,
  "name": "que eu acesse o formulario",
  "keyword": "Dado "
});
formatter.step({
  "line": 37,
  "name": "eu preencher o campo nome com \"Tiago\" e motivo com \"Por gostar muito de tecnologia\" e a data \"12/12/1981\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 38,
  "name": "submeter o formulario",
  "keyword": "E "
});
formatter.step({
  "line": 39,
  "name": "eu devo ver a mensagem \"Informações enviadas com sucesso!\"",
  "keyword": "Então "
});
formatter.match({
  "location": "TestSteps.que_eu_acesse_o_formulario()"
});
formatter.result({
  "duration": 12324006332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiago",
      "offset": 31
    },
    {
      "val": "Por gostar muito de tecnologia",
      "offset": 52
    },
    {
      "val": "12/12/1981",
      "offset": 94
    }
  ],
  "location": "TestSteps.eu_preencher_o_campo_nome_com_e_motivo_com_e_a_data(String,String,String)"
});
formatter.result({
  "duration": 3415138913,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.submeter_o_formulario()"
});
formatter.result({
  "duration": 142224741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informações enviadas com sucesso!",
      "offset": 24
    }
  ],
  "location": "TestSteps.eu_devo_ver_a_mensagem(String)"
});
