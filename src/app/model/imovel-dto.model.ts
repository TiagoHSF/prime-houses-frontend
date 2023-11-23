import { DetalhesImovelDTO } from "./detalhes-imovel-dto.model";
import { EnderecoDTO } from "./endereco-dto.model";
import { GenericDTO } from "./generic-dto.model";

export interface ImovelDTO extends GenericDTO {
    titulo: string;
    descricao: string;
    detalhes: DetalhesImovelDTO;
    fotos: File[];
    endereco: EnderecoDTO;
    tipoImovel: string;
    seloVeificado: boolean;
    estrelasSelo: number;
    formasPagamento: string;
    valor: number;
    validado: boolean;
    empresaId: number;
    corretorId: number;
    porcentagemComissao: number;
    codigo: string;
}