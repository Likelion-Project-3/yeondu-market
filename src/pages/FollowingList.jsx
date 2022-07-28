import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TapMenu from "../components/common/TapMenu";
import { BASE_URL } from "../components/constants/baseUrl";
import FollowingContainer from "../components/follow/FollowingContainer";
import FollowingHeader from "../components/follow/FollowingHeader";
import "../pages/style/FollowerList.css";
function FollowingList() {
    const [followingList, setFollowingList] = useState([]);
    const token = localStorage.getItem("token");
    const { accountName } = useParams();

    const accountname = localStorage.getItem("accountname");
    const url = BASE_URL + `/profile/${accountname}/following`;

    console.log("@@", accountName);
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
