import React,{useEffect, useState} from "react";
import Intro from "../pages/Intro";
import "./Splash.css";
import "../reset.css";


function Splash() {
    let [alert, alertSet] = useState(true);
    useEffect(()=>{
        let timer = setTimeout(()=>{alertSet(false)},1500);
        return()=>{clearTimeout(timer)}
    },[])
    return (
        alert === true?
        <>
            <h1 className="headTitle">화면 로딩중</h1>
            <section>
                <p className="colorPea">완두콩</p>
                <h2 className="mainMarket">연두 마켓</h2>
            </section>
        </>:<Intro/>
    );
}

export default Splash;
