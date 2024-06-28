import "./List.css"
import { useState } from "react";
import axios from "axios";

export interface ItemProps {
    sn: number;
    type: number;
    party: string;
    user: string;
    desc: string;
    fee: number;
    unit: number;
    password: string;
    onLoadItems(): void;
}

export default function Item({sn, password, type, party, user, desc, fee, unit, onLoadItems} : ItemProps) {
    const [isOpen, setOpen] = useState(false)
    const onToggle = () => {
        setOpen(!isOpen)
    }

    const [customPassword, setCusPassword] = useState('')

    function onDelete() {
        console.log(password, customPassword)
        if(password === customPassword) {
            axios.delete(`http://localhost:8080/party/${sn}`, {data: {password: customPassword}})
            .then(() => {
                console.log('성공~')
                onLoadItems()
            })
        } else {
            console.log('비밀번호 땡~')
        }
    }

    return (
        <div className="Item">

        <div className="Title" onClick={onToggle}>   
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

            <div className="bottom">
                <div className="bottons">
                    <button>수정하기</button>
                    <button onClick={onDelete}>삭제하기</button>
                </div>
                <div className="password-input">
                    <div>비밀번호</div>
                    <input type="text" value={customPassword} 
                        onChange={(e) => setCusPassword(e.target.value)}
                    />
                </div>
            </div>
        </div>

    </div>
    )
}