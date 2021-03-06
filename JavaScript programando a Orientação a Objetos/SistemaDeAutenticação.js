export class SistemaAutenticaĆ§ao {
    static login(autenticavel, senha) {
        if (SistemaAutenticaĆ§ao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel &&
            autenticavel.autenticar instanceof Function
    }
}