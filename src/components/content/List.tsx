import React, { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import "./List.css"
import Item, {ItemProps} from "./Item"
import axios from "axios";

const List = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/party")
        .then(({data}) => setItems(data))
    }, [])

    const navigate = useNavigate();

    function clickWrite() {
        navigate('/write');
    }

    return <div className="Container">
            <button onClick={clickWrite}>새로 작성하기</button>
        {
            items.map(({type, sn, party, user, fee, desc, unit} : ItemProps) => 
                (
                    <Item key={sn} 
                          sn={sn}
                          type={type}
                          party={party}
                          user={user}
                          desc={desc}
                          fee={fee}
                          unit={unit}
                    ></Item>
                )
            )
        }
    </div>
};
  

export default List;