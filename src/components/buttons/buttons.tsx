import { Children, HTMLAttributes } from "react"
import { ImMenu } from "react-icons/im"
import { text } from "stream/consumers"

export interface IButtonNav extends HTMLAttributes<HTMLButtonElement> {
    text?: string
    icon?: React.ReactNode
    open?: boolean
}

export function ButtonNav({ ...props }: IButtonNav) {

    return (
        <div>
            <button {...props}>
                <ImMenu size={40} />
            </button>
        </div>
    )
}

export function ButtonMenuNav({ icon, text, open, ...props }: IButtonNav) {
    return (
        <div className={` transition-all duration-0 overflow-x-hidden px-2`}>
            <button {...props} className={`w-full h-full flex ${open == false && 'justify-center items-center'}`}>
                <p className={`${open == true ? 'opacity-100' : 'opacity-0 hidden'} transition-all duration-0 text-start whitespace-nowrap h-full my-auto`}>{text}</p>
                <div className={`${open == false ? 'opacity-100' : 'opacity-0'} transition-all duration-0`}>
                    {icon}
                </div>
            </button>
        </div>
    )
}