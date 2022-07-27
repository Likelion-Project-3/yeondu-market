import "../pages/style/FollowerList.css";
import React, { useEffect, useState } from "react";
import FollowHeader from "../components/follow/FollowHeader";
import FollowerContainer from "../components/follow/FollowerContainer";
import axios from "axios";
import { BASE_URL } from "../components/constants/baseUrl";

function FollowerList() {
    const [followerList, setFollowerList] = useState([]);
    const token = localStorage.getItem("token");
    const accountname = localStorage.getItem("accountname");
    const url = BASE_URL + `/profile/${accountname}/follower`;
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
        </div>
    );
}

export default FollowerList;
