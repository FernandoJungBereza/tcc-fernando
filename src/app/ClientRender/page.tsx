'use client'

import { ButtonRedirect } from "@/components/buttons/buttons"
import { ContainerPage } from "@/components/containers/containers"
import { IDataRender } from "@/interfaces"
import { useParams } from "next/navigation"
import { useState, useEffect, useContext } from "react"

export default function ClientRender() {

    const [data, setData] = useState<Array<IDataRender> | null>()

    function JsonServerGet() {
        fetch('https://api.fernandobereza.tech/ClientRender')
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

    const urlCanonical = `https://www.fernandobereza.tech/ClientRender`

    return (
        <div>
            <title>Artigos - Exploração espacial</title>
            <meta name="description" content="Artigos, exploração do universo, A busca por vida extraterrestre é um dos empreendimentos mais emocionantes da astronomia."/>
            <link rel="canonical" href={urlCanonical} />
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
                                            <div>
                                                <h4 className="text-xl justify-center flex">{item.titulo}</h4>
                                                <div>
                                                    <label className="text-center flex justify-center mt-4">Resumo</label>
                                                    <p className="my-4 line-clamp-2 overflow-hidden text-ellipsis">{item.conteudo}</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Autor: {item.autor.nome}</span>
                                                    <span>Data: {item.data_publicacao}</span>
                                                </div>
                                            </div>
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

