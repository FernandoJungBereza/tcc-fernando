'use client'

import { useState } from "react"
import { IoMdAdd } from "react-icons/io"
import { RiSubtractFill } from "react-icons/ri"

interface IArrayComponent {
    description: string
    topic:string
}

export function ArrayRender({ description, topic }: IArrayComponent) {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className="w-full bg-neutral-700 p-4">
            <div className="flex justify-between">
                <h2 className="text-2xl flex justify-center items-center">
                    {topic}
                </h2>
                <button onClick={() => setOpen(!open)} className="flex justify-center items-center">
                    {open == false ?
                        <IoMdAdd size={50} />
                        :
                        <RiSubtractFill size={50} />
                    }
                </button>
            </div>
            {open == true ?
                <div className="bg-neutral-900 p-4 rounded-md m-auto">
                    <p>
                        Descrição: {
                            description
                        }
                    </p>
                </div>
                : null
            }
        </div>
    )
}