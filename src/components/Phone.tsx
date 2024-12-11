import { HTMLAttributes } from "react"

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
    dark?: boolean
}

const Phone = ({ imgSrc}: PhoneProps) => {
    return (
<div className="relative w-full aspect-square">
    <img
        className="object-cover w-full h-full rounded-[1.5rem]"
        src={imgSrc}
        alt="overlaying phone image"
    />
</div>

    )
}

export default Phone
