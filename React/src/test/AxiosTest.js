import axios from 'axios';
import React, { useEffect, useState } from "react";

const AxiosTest = () => {
    const [info, setInfo] = useState([]);
    const [list , SetList] = useState([]);
  
    // useEffect(()=> {
    //     console.log("안녕하세요")
    //     // axios.get("http://10.125.121.188:8080/toilets/data")
    //     fetch("http://10.125.121.188:8080/toilets/data", { method : "GET" })
    //     .then(res => res.json())
    //     .then(res => {SetList(res.data)
    //         console.log(res.data)})
    //     .catch(err => {console.log(err)})
    //     },[])

    useEffect(()=> {
        console.log("안녕하세요")
        axios.get('http://localhost:8080/toilets/data')
        .then(res => {SetList(res.data)
            console.log(res.data)})
        .catch(err => {console.log(err)})
        },[])

    return (
        <>
            <div>{list.length}</div>
            {/* <div>{list}</div> */}
        </>
    );
}

export default AxiosTest;