import "../pages/style/FollowerList.css";
import React, { useEffect, useState } from "react";
import FollowHeader from "../components/follow/FollowHeader";
import FollowerContainer from "../components/follow/FollowerContainer";
import axios from "axios";
import { BASE_URL } from "../components/constants/baseUrl";
import TapMenu from "../components/common/TapMenu";
import { useLocation } from "react-router-dom";

function FollowerList() {
    const [followerList, setFollowerList] = useState([]);
    const token = localStorage.getItem("token");

    const location = useLocation();
    const accountName = location.state.accountName;

    const url = BASE_URL + `/profile/${accountName}/follower`;
    const getFollowerList = () => {
        axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            })
            .then((response) => {
                setFollowerList(response.data);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getFollowerList();
    }, []);
    return (
        <div className="followerWrap">
            <FollowHeader />
            <FollowerContainer followerList={followerList} />
            <TapMenu />
        </div>
    );
}

export default FollowerList;
