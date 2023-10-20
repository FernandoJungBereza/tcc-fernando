'use client'

import { ContainerPage } from "@/components/containers/containers"
import { IDataRender } from "@/interfaces"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ServerRenderById(request: any) {
    const [data, setData] = useState<IDataRender | null>()
    const id = request.params.id

    function JsonServerGet() {

        fetch(`https://api.fernandobereza.tech/ClientRender/${id}`)
            .then(res => {
                res.json()
                    .then(result => {
                        setData(result)
                    })
            }).catch(err => {
                setData(null)
            })
    }

    useEffect(() => {
        JsonServerGet()
    }, [])

    return (
        <div>
            <title>Client Side Render</title>
            <meta name="description" content="Página para testar a renderização pelo cliente" />
            {data?.tags?.map((item, index) => <meta name="tags" key={index} content={item} />)}
            {data != null ?
                <div>
                    <Image
                        src={`${data?.imagem_destaque}`}
                        width={1920}
                        height={600}
                        alt={"Culínaria"}
                    />
                    <ContainerPage>
                        <div className="flex-col justify-center w-11/12 m-auto">
                            <div className="flex justify-center my-10">
                                <h1 className="text-4xl">{data?.titulo}</h1>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl flex justify-center">{data?.subtitulo}</h2>
                            </div>
                            <div className="py-8">
                                <p>
                                    Conteudo: {data?.conteudo}
                                </p>
                            </div>
                            <div className="flex w-full justify-between  py-8">
                                <ul className="marker:text-sky-400 text-center">
                                    <li>Autor: {data?.autor?.nome}</li>
                                    <li>Email: {data?.autor?.email}</li>
                                    <li>Linkedin: {data?.autor?.perfil_social.linkedin}</li>
                                    <li>Twitter: {data?.autor?.perfil_social?.twitter}</li>
                                </ul>
                                <div>
                                    <span className="text-center flex justify-center">
                                        Data de Publicação: {data?.data_publicacao}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="w-full">
                                    <h3 className="text-2xl text-center">
                                        Comentarios
                                    </h3>
                                    <div className="space-y-4 p-2">
                                        {data?.comentarios?.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <div className="bg-neutral-600 border-2 border-blue-600 rounded-md p-4">
                                                        <ul>
                                                            <li>Autor: {item.autor_comentario}</li>
                                                            <li>Email: {item.email_comentario}</li>
                                                            <li>Data: {item.data_comentario}</li>
                                                            <li> Comentário: {item.texto_comentario}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="w-full">
                                    <h3 className="text-2xl text-center">
                                        Artigos Relacionados
                                    </h3>
                                    <div className="space-y-4 p-2">
                                        {data?.artigos_relacionados?.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <div className="bg-neutral-600 border-2 border-blue-600 rounded-md p-4">
                                                        <ul>
                                                            <h4 className="text-xl justify-center flex">{item.titulo}</h4>
                                                            <div className="flex-col">
                                                                <label className="text-center flex justify-center">Resumo</label>
                                                                <div className="p-4">{item.resumo}</div>
                                                            </div>
                                                            <div className="flex justify-between">
                                                                <span>Autor: {item.autor}</span>
                                                                <span>Data: {item.data_publicacao}</span>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-2xl py-4">Informações Adicionais</h5>
                                <ul className="py-4">
                                    <li>Categoria: {data?.categoria}</li>
                                    <li>Visualizações: {data?.visualizacoes}</li>
                                    <li>Tempo de Leitura:  {data?.tempo_leitura}</li>
                                    <li>Idioma: {data?.idioma}</li>
                                    <li>Número de Palavras: {data?.numero_palavras}</li>
                                </ul>
                            </div>
                        </div>
                    </ContainerPage>
                </div> : null
            }
        </div>
    )
}