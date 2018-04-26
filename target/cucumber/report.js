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
  "name": "Validar texto party rock",
  "description": "",
  "id": "formulario;validar-texto-party-rock",
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
  "name": "eu devo ver o texto \"party rock\"",
  "keyword": "Então "
});
formatter.match({
  "location": "TestSteps.que_eu_acesse_o_formulario()"
});
formatter.result({
  "duration": 573148703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "party rock",
      "offset": 21
    }
  ],
  "location": "TestSteps.eu_devo_ver_o_texto(String)"
});
formatter.result({
  "duration": 41044542,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validar obrigatoriedade do campo nome",
  "description": "",
  "id": "formulario;validar-obrigatoriedade-do-campo-nome",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 16,
  "name": "que eu acesse o formulario",
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "eu preencher o campo nome com \"\" e motivo com \"trabalhar\" e a data \"12121981\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "clicar no botão",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "eu devo ver a mensagem \"O nome não pode ser nulo\"",
  "keyword": "Então "
});
formatter.match({
  "location": "TestSteps.que_eu_acesse_o_formulario()"
});
formatter.result({
  "duration": 273076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 31
    },
    {
      "val": "trabalhar",
      "offset": 47
    },
    {
      "val": "12121981",
      "offset": 68
    }
  ],
  "location": "TestSteps.eu_preencher_o_campo_nome_com_e_motivo_com_e_a_data(String,String,String)"
});
formatter.result({
  "duration": 322144,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.clicar_no_botão()"
});
formatter.result({
  "duration": 228274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome não pode ser nulo",
      "offset": 24
    }
  ],
  "location": "TestSteps.eu_devo_ver_a_mensagem(String)"
});
formatter.result({
  "duration": 233963,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Validar obrigatoriedade do campo data de nascimento",
  "description": "",
  "id": "formulario;validar-obrigatoriedade-do-campo-data-de-nascimento",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 22,
  "name": "que eu acesse o formulario",
  "keyword": "Dado "
});
formatter.step({
  "line": 23,
  "name": "eu preencher o campo nome com \"Tiago\" e motivo com \"trabalhar\" e a data \"\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "clicar no botão",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "eu devo ver a mensagem \"A data não pode ser nula\"",
  "keyword": "Então "
});
formatter.match({
  "location": "TestSteps.que_eu_acesse_o_formulario()"
});
formatter.result({
  "duration": 1447870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiago",
      "offset": 31
    },
    {
      "val": "trabalhar",
      "offset": 52
    },
    {
      "val": "",
      "offset": 73
    }
  ],
  "location": "TestSteps.eu_preencher_o_campo_nome_com_e_motivo_com_e_a_data(String,String,String)"
});
formatter.result({
  "duration": 363390,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.clicar_no_botão()"
});
formatter.result({
  "duration": 130849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A data não pode ser nula",
      "offset": 24
    }
  ],
  "location": "TestSteps.eu_devo_ver_a_mensagem(String)"
});
formatter.result({
  "duration": 227563,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validar obrigatoriedade do campo de texto",
  "description": "",
  "id": "formulario;validar-obrigatoriedade-do-campo-de-texto",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 28,
  "name": "que eu acesse o formulario",
  "keyword": "Dado "
});
formatter.step({
  "line": 29,
  "name": "eu preencher o campo nome com \"Tiago\" e motivo com \"\" e a data \"12121981\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "clicar no botão",
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "eu devo ver a mensagem \"O texto não pode ser nulo\"",
  "keyword": "Então "
});
formatter.match({
  "location": "TestSteps.que_eu_acesse_o_formulario()"
});
formatter.result({
  "duration": 265964,
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
      "val": "12121981",
      "offset": 64
    }
  ],
  "location": "TestSteps.eu_preencher_o_campo_nome_com_e_motivo_com_e_a_data(String,String,String)"
});
formatter.result({
  "duration": 286587,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.clicar_no_botão()"
});
formatter.result({
  "duration": 142226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O texto não pode ser nulo",
      "offset": 24
    }
  ],
  "location": "TestSteps.eu_devo_ver_a_mensagem(String)"
});
formatter.result({
  "duration": 376901,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Enviar formulario corretamente",
  "description": "",
  "id": "formulario;enviar-formulario-corretamente",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 34,
  "name": "que eu acesse o formulario",
  "keyword": "Dado "
});
formatter.step({
  "line": 35,
  "name": "eu preencher o campo nome com \"Tiago\" e motivo com \"conhecimento\" e a data \"12121981\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 36,
  "name": "clicar no botão",
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "eu devo ver a mensagem \"Mensagem enviada com sucesso\"",
  "keyword": "Então "
});
formatter.match({
  "location": "TestSteps.que_eu_acesse_o_formulario()"
});
formatter.result({
  "duration": 308632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiago",
      "offset": 31
    },
    {
      "val": "conhecimento",
      "offset": 52
    },
    {
      "val": "12121981",
      "offset": 76
    }
  ],
  "location": "TestSteps.eu_preencher_o_campo_nome_com_e_motivo_com_e_a_data(String,String,String)"
});
formatter.result({
  "duration": 369790,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.clicar_no_botão()"
});
formatter.result({
  "duration": 137960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mensagem enviada com sucesso",
      "offset": 24
    }
  ],
  "location": "TestSteps.eu_devo_ver_a_mensagem(String)"
});
formatter.result({
  "duration": 273787,
  "status": "passed"
});
});