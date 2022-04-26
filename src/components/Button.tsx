import { ButtonProps } from "../interfaces"


export const Button = ({cta, color, onShow}:ButtonProps) =>{
    return <button style={{background:color}} onClick={()=>onShow()} className="btn">{cta}</button>
}