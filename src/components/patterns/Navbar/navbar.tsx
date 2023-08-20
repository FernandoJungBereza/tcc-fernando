'use client'
import { useState } from "react";
import { ButtonMenuNav, ButtonNav } from "../../buttons/buttons";
import { ContainerPatterns } from "../../containers/containers";
import { AiFillHome, AiOutlineUserSwitch } from "react-icons/ai"
import { IoIosThunderstorm } from "react-icons/io"
import { BsServer } from "react-icons/bs"
import { usePathname, useRouter } from "next/navigation";

export interface IMenuProps {
    path: string,
    text: string
    icon: React.ReactNode
    id: number
}

export default function MenuNavbar() {

    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
    const router = useRouter()
    const pathRoute = usePathname()

    const menu: IMenuProps[] = [
        {
            id: 1,
            path: "/",
            text: "Home-Hibrid",
            icon: <AiFillHome title="home" size={35} color="white" />,
        },
        {
            id: 2,
            path: "/ServerRender",
            text: "Server-Render",
            icon: <BsServer title="Banners" size={35} color="white" />,
        },
        {
            id: 3,
            path: "/ClientRender",
            text: "Client-Render",
            icon: (
                <AiOutlineUserSwitch title="client-render" size={35} color="white" />
            ),
        },
        {
            id: 4,
            path: "/StaticRender",
            text: "Static",
            icon: < IoIosThunderstorm title="static-render" size={40} color="white" />,
        },

    ];

    function VerificationPath(path: string, route: string) {
        if (path === route) {
            return 'bg-blue-950 border-r-2 border-blue-700 duration-200'
        }
    }

    return (
        <nav className="text-black flex ">
            <div className={` bg-neutral-900 text-white text-xl border-r-2 border-blue-700 ${menuIsOpen == true ? 'w-[200px]' : 'w-[50px]'} text-black  transition-all duration-200 z-50`}>
                <div className={`flex flex-col text-xl fixed ${menuIsOpen == true ? 'w-[200px]' : 'w-[50px]'} transition-all duration-200`}>
                    <div className={` ${menuIsOpen == true ? 'h-[60px] border-b-4 px-2' : 'h-[0px]'} border-blue-700 transition-all duration-200 z-30 shadow-black/50 shadow-md`}>
                        <h1 className={`overflow-hidden whitespace-nowrap ${menuIsOpen == true ? '' : 'hidden'} h-full flex justify-center items-center`}>TCC-Fernando</h1>
                    </div>
                    {menu.map((item, index) => {
                        return (
                            <div key={index + item.id} className={`p-2 ${VerificationPath(item.path, pathRoute)}`}>
                                <ButtonMenuNav icon={item.icon} text={item.text} open={menuIsOpen} onClick={() => router.push(`${item.path}`)} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="h-[60px] bg-neutral-900 text-white border-b-4 border-blue-700 shadow-black/50 shadow-md w-full fixed ">
                <ContainerPatterns>
                    <div className={`${menuIsOpen == true ? 'ml-[210px]' : 'ml-[65px]'} text-white z-50 flex justify-start items-center transition-all duration-200 h-[60px] `}>
                        <ButtonNav onClick={() => setMenuIsOpen(!menuIsOpen)} />
                        <h1 className="ml-4">
                            {
                            pathRoute == '/ServerRender' ? 'Server-Side-Render' 
                            : pathRoute == '/ClientRender' ? 'Client-Side-Render' 
                            : pathRoute == '/Static' ?'Static-Render' 
                            : 'Home'
                            }
                        </h1>
                    </div>
                </ContainerPatterns>
            </div>
        </nav >
    )
}