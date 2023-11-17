export interface UsuarioDTO {
    nome: string;

    sobrenome: string;

    email: string;

    celular: string;

    dataNascimento: Date;

    documento: string;

    codigoSeguranca: number;

    codigoSegurancaConfirmado: boolean;

    senha: string;

    tipo: string;

    token: string;

    // EnderecoDTO enderecoDTO;

    creci: string;

}