package principal;

public class Formulario {

    public String enviar(String nome, String texto , String data){

        if(!isStringUsable(nome)){
            return "O nome não pode ser nulo";
        }

        if(!isStringUsable(data)){
            return "A data não pode ser nula";
        }

        if(!isStringUsable(texto)){
            return "O texto não pode ser nulo";
        }

        return "Mensagem enviada com sucesso";


    }

    public static Boolean isStringUsable(String s) {
        return s != null && !s.isEmpty();   // lembre-se de que a comparação
                                            // com nulo sempre deve vir antes,
                                            // para evitar chamar métodos em instâncias nulas
    }
}
