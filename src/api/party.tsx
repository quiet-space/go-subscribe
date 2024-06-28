import axios from "axios";
import { useState } from "react";

export function listAPI () {
    const [list, setList] = useState(null);
    function getList() {
        axios
            .get("http://localhost:8080/party")
            .then((rs) => {
                setList(rs.data)
            })
    }
    return list 
}