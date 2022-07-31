import React, { useEffect, useState } from "react";
import axios from "axios";
import Intro from "../pages/Intro";
import { BASE_URL } from "../components/constants/baseUrl";
import "../pages/style/Splash.css";

function Splash() {
    let [alert, alertSet] = useState(true);
    useEffect(() => {
        let timer = setTimeout(() => {
            alertSet(false);
        }, 1500);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    const [isValid, setIsValid] = useState();
    const token = localStorage.getItem("token");

    const goHome = () => {
        window.location.href = "/home";
    };

    useEffect(() => {
        const handleCheckToken = async () => {
            try {
                const response = await axios.get(
                    BASE_URL + "/user/checktoken",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log(response);
                setIsValid(response.data.isValid);
            } catch (err) {
                console.error(err);
            }
        };
        handleCheckToken();
    }, []);

    if (isValid) {
        goHome();
    }

    return alert === true ? (
        <div className="splashWrap">
            <h1 className="headTitle">화면 로딩중</h1>
            <section className="splashSection">
                <p className="colorPea">완두콩</p>
                <h2 className="mainMarket" />
            </section>
        </div>
    ) : (
        <Intro />
    );
}

export default Splash;
