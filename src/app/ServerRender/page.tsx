import { ContainerPage } from "@/components/containers/containers"
import { ArrayRender } from "@/components/pages/arrayRender"
import { IData } from "@/interfaces"
import Head from "next/head"
import Image from "next/image"

export default async function ServerRender() {
    const res = await fetch('http://localhost:4000/teste', {
        cache: 'no-store',
    })
    const data: Array<IData> = await res.json()

    return (
        <div>
                <title>Server</title>
                <meta name="description" content="Página para testar a renderização pelo servidor" />
            <ContainerPage>
                <div className="flex justify-center my-10">
                    <h1 className="text-4xl">Testando a Renderização pelo Servidor</h1>
                </div>
                <div className="space-y-4">
                    {data.map((item, index) => {
                        return (
                            <div key={item.id + index}>
                                <ArrayRender
                                    description={item.caracteristica}
                                    topic={item.nome}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className="w-full max-h-[200px] overflow-auto overflow-y-hidden my-8">
                    <Image src={data[0].midia.nome} width={1920} height={600} alt={"ImageServer"} priority={true} />
                </div>
                <div className="flex-col justify-center mb-8">
                    {data.map((item, index) => {
                        return (
                            <div key={index + item.id} >
                                <div className="text-center py-8">
                                    <h2>{item.title}</h2>
                                </div>
                                <div className="w-11/12 m-auto">
                                    <p>{item.resposta}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </ContainerPage>
        </div>
    )
}