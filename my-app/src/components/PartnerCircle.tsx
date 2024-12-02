import React from "react"

interface Props{
    imgSrc: string
    className:string
}
const PartnerCircle : React.FC<Props> = ({imgSrc,className}) => {
    return(
        <div className={`${className} absolute border-[#FFFFFF4D] border p-11 px-[15px] bg-[#252532CC] rounded-full`}>
             <img src={imgSrc}/>
        </div>
    )
}
export default PartnerCircle