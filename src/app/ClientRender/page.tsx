'use client'

import { ButtonRedirect } from "@/components/buttons/buttons"
import { ContainerPage } from "@/components/containers/containers"
import { IDataRender } from "@/interfaces"
import { useParams } from "next/navigation"
import { useState, useEffect, useContext } from "react"

export default function ClientRender() {

    const [data, setData] = useState<Array<IDataRender> | null>()

    function JsonServerGet() {
        fetch('http://localhost:4000/ClientRender')
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
            <ContainerPage>
                <div className="flex-col justify-center w-11/12 m-auto">
                    <div className="w-full">
                        <h3 className="text-2xl text-center py-8">
                            Artigos
                        </h3>
                        <div className="space-y-4 p-4">
                            {data?.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        <ButtonRedirect
                                            className="bg-neutral-600 border-2 border-blue-600 rounded-md p-4 cursor-pointer hover:scale-105 transition-all duration-200 -z-10"
                                            link={`ClientRender/artigo/${item.id}`}
                                        >
                                            <ul>
                                                <h4 className="text-xl justify-center flex">{item.titulo}</h4>
                                                <div>
                                                    <label className="text-center flex justify-center mt-4">Resumo</label>
                                                    <p className="my-4 line-clamp-2 overflow-hidden text-ellipsis">{item.conteudo}</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Autor: {item.autor.nome}</span>
                                                    <span>Data: {item.data_publicacao}</span>
                                                </div>
                                            </ul>
                                        </ButtonRedirect>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </ContainerPage>
        </div>
    )
}

