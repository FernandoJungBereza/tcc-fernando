export interface IDataRender {
    titulo: string
    subtitulo: string
    autor: {
        nome: string,
        email: string,
        perfil_social: {
            twitter: string
            linkedin: string
        }
    }
    data_publicacao: string
    conteudo: string
    tags: Array<string>
    comentarios: Array<
        {
            autor_comentario: string
            email_comentario: string
            data_comentario: string
            texto_comentario: string
        }
    >
    artigos_relacionados: Array<
        {
            titulo:string
            autor:string
            data_publicacao:string
            resumo:string
            tags: Array<string>
        }
    >
    categoria:string
    visualizacoes:number
    tempo_leitura:string
    idioma:string
    numero_palavras:number
    autor_foto:string
    imagem_destaque:string
    url_compartilhamento:string
    fonte_referencia: string
}