import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TapMenu from "../components/common/TapMenu";
import { BASE_URL } from "../components/constants/baseUrl";
import FollowingContainer from "../components/follow/FollowingContainer";
import FollowingHeader from "../components/follow/FollowingHeader";
import "../pages/style/FollowerList.css";

function FollowingList() {
    const [followingList, setFollowingList] = useState([]);
    const token = localStorage.getItem("token");

    const location = useLocation();
    const accountName = location.state.accountName;

    const url = BASE_URL + `/profile/${accountName}/following`;
    const getFollowingList = () => {
        axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            })
            .then((response) => {
                setFollowingList(response.data);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getFollowingList();
    }, []);
    return (
        <div className="followerWrap">
            <FollowingHeader />
            <FollowingContainer followingList={followingList} />
            <TapMenu />
        </div>
    );
}

export default FollowingList;
