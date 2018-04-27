#language: pt

	Funcionalidade: Formulario
	Com o objetivo de implementar um desafio
	
	Cenário: Validar texto party rock
	Dado que eu acesse o formulario
	Então eu devo ver o texto "party rock"

	Cenário: Validar obrigatoriedade do campo nome
    Dado que eu acesse o formulario
    Quando eu preencher o campo nome com "" e motivo com "Por gostar muito de tecnologia" e a data "12/12/1981"
    E clicar no botão
    Então eu devo ver a mensagem de erro no campo nome "This field is required."
	
	Cenário: Validar obrigatoriedade do campo data de nascimento
    Dado que eu acesse o formulario
    Quando eu preencher o campo nome com "Tiago" e motivo com "Por gostar muito de tecnologia" e a data ""
    E clicar no botão
    Então eu devo ver a mensagem de erro no campo data "This field is required."
	
	Cenário: Validar obrigatoriedade do campo de texto
    Dado que eu acesse o formulario
    Quando eu preencher o campo nome com "Tiago" e motivo com "" e a data "12/12/1981"
    E clicar no botão
    Então eu devo ver a mensagem de erro no campo texto "This field is required."
    
    Cenário: Validar obrigatoriedade de todos os campos
    Dado que eu acesse o formulario
    Quando eu preencher o campo nome com "" e motivo com "" e a data ""
    E clicar no botão
    Então eu devo ver a mensagem de erro em todos os campos "This field is required."
	
	Cenário: Enviar formulario corretamente
    Dado que eu acesse o formulario
    Quando eu preencher o campo nome com "Tiago" e motivo com "Por gostar muito de tecnologia" e a data "12/12/1981"
    E clicar no botão
    Então eu devo ver a mensagem "Informações enviadas com sucesso!"