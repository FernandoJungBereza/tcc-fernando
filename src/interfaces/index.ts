
export interface IEstructureDataRender {
    imagem_destaque: string
    array: Array<IDataRender>
}

export interface IDataRender {
    id: number
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
            titulo: string
            autor: string
            data_publicacao: string
            resumo: string
            tags: Array<string>
        }
    >
    categoria: string
    visualizacoes: number
    tempo_leitura: string
    idioma: string
    numero_palavras: number
    imagem_destaque: string
}