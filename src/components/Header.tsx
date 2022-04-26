import { Headerprops } from "../interfaces"
import { Button } from "./Button"


export const Header = ({onShow, show}:Headerprops) =>{
    return(
        <header className="header">
            <h2>React Task Tracker</h2>
            <Button onShow={onShow} color={`${show ? 'red': 'green'}`} cta={`${show ? 'Close':'Add'}`}/>
        </header>
    )
}