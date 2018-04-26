#language: pt

	Funcionalidade: Formulario
	Com o objetivo de implementar um desafio

    @avoid
	Cenário: Validar uso do webdriver
	Dado que eu acesse o chrome
	Então eu devo ver o texto no chrome "google"

	Cenário: Validar texto party rock
	Dado que eu acesse o formulario
	Então eu devo ver o texto "party rock"

	Cenário: Validar obrigatoriedade do campo nome
    Dado que eu acesse o formulario
    Quando eu preencher o campo nome com "" e motivo com "trabalhar" e a data "12121981"
    E clicar no botão
    Então eu devo ver a mensagem "O nome não pode ser nulo"

	Cenário: Validar obrigatoriedade do campo data de nascimento
    Dado que eu acesse o formulario
    Quando eu preencher o campo nome com "Tiago" e motivo com "trabalhar" e a data ""
    E clicar no botão
    Então eu devo ver a mensagem "A data não pode ser nula"

	Cenário: Validar obrigatoriedade do campo de texto
    Dado que eu acesse o formulario
    Quando eu preencher o campo nome com "Tiago" e motivo com "" e a data "12121981"
    E clicar no botão
    Então eu devo ver a mensagem "O texto não pode ser nulo"

	Cenário: Enviar formulario corretamente
    Dado que eu acesse o formulario
    Quando eu preencher o campo nome com "Tiago" e motivo com "conhecimento" e a data "12121981"
    E clicar no botão
    Então eu devo ver a mensagem "Mensagem enviada com sucesso"