import "./List.css"
import { useState } from "react";

export interface ItemProps {
    sn: number;
    type: number;
    party: string;
    user: string;
    desc: string;
    fee: number;
    unit: number;
}

export default function Item({type, party, user, desc, fee, unit}: ItemProps) {
    const [isOpen, setOpen] = useState(false)
    const onToggle = () => {
        setOpen(!isOpen)
    }

    return (
        <div className="Item" onClick={onToggle}>

        <div className="Title">   
            <div className="OTT-Type">
                <img src={require(`../../img/${type}.png`)} 
                    alt="OTT logo" 
                    className="OTT-logo"
                />
            </div>
            <div className="Party">
                {party}
            </div>
            <div className="User">
                {user}
            </div>
        </div>

        <div className={isOpen ? "Content" : "Hidden"}>
            <div className="Desc">
                {desc}
            </div>
            <div className="Pay">
                {unit}일당 {fee}원
            </div>
        </div>

    </div>
    )
}