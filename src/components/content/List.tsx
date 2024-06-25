import React, { useState } from "react"
import "./List.css"
import Item, {ItemProps} from "./Item"
import PartyList from "../../constants/const";

const List = () => {
    const [items, setItems] = useState(PartyList)

    return <div className="Container">
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