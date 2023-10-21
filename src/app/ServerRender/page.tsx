import { ButtonRedirect } from "@/components/buttons/buttons"
import { ContainerPage } from "@/components/containers/containers"
import { IDataRender } from "@/interfaces"
import Image from "next/image"
import { redirect, usePathname, useRouter, useSearchParams } from "next/navigation"
import { NextRequest } from "next/server"

export default async function ServerRender() {
    let data: Array<IDataRender> | null

    try {
        const res = await fetch('https://api.fernandobereza.tech/ServerRender', {
            cache: "no-cache"
        })
        data = await res.json()
    } catch {
        data = null
    }

    const urlCanonical = "https://www.fernandobereza.tech/ServerRender"

    return (
        <div>
            <title>Artigos - Viagens</title>
            <meta name="description" content="Artigos, Viagens pelo mundo, Viajar pelo mundo é uma das experiências mais enriquecedoras..."/>
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
                                            link={`ServerRender/artigo/${item.id}`}
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