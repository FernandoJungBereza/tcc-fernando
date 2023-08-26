import Link from "next/link"
import { ContainerPatterns } from "../../containers/containers"
import { BsGithub } from "react-icons/bs"

export default function Footer() {
    return (
        <div className="bg-neutral-900 border-t-4 border-blue-700">
            <ContainerPatterns>
                <footer className=" py-2">
                    <div className="py-2 grid grid-cols-1 xl:grid-cols-3 text-white">
                        <h5>
                            <Link href={"https://github.com/FernandoJungBereza"} className="flex justify-center items-center">
                                <BsGithub size={30} className={"mr-4"} />
                                Github: https://github.com/FernandoJungBereza
                            </Link>
                        </h5>
                        <h5 className="flex justify-center items-center">
                            Trabalho de Conclusão de Curso
                        </h5>
                        <h5 className="flex justify-center items-center">
                            © 2023 Fernando Jung Bereza
                        </h5>
                    </div>
                </footer>
            </ContainerPatterns>
        </div>
    )
}