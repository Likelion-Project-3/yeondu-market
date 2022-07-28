import React from "react";
import { useState } from "react";
import axios from "axios";
import messageImg from "../../assets/icon/icon-message-circle2.svg";
import shareIcon from "../../assets/icon/icon-share.svg";
import "./UserProfileBtn.css";
import { BASE_URL } from "../constants/baseUrl";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function UserProfileBtn() {
    const token = localStorage.getItem("token");
    const accountname = localStorage.getItem("accountname");

    const { accountName } = useParams();

    const [follow, setFollow] = useState(false);
    const [unfollow, setUnFollow] = useState(false);

    //팔로우
    const handleSubmitFollow = async () => {
        try {
            const res = await axios(
                BASE_URL + `/profile/${accountName}/follow`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                }
            );
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    //언팔로우
    const handleSubmitUnFollow = async () => {
        try {
            const res = await axios(
                BASE_URL + `/profile/${accountName}/unfollow`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                }
            );
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    const handleFollow = () => {
        handleSubmitFollow();
        setFollow(!follow);
        setUnFollow(true);
    };

    const handleUnFollow = () => {
        setFollow(!follow);
        setUnFollow(false);
        handleSubmitUnFollow();
    };

    console.log("follow", follow);
    console.log("unfollow", unfollow);
    return (
        <div className="InfoBtn">
            <button className="profileCircleBtn chat">
                <img src={messageImg} alt="" className="messageImg" />
            </button>
            {/* <button className="profileFollowBtn" onClick={handleFollow}>
                팔로우
            </button> */}
            {follow === true && unfollow === false ? (
                <button className="profileFollowBtn" onClick={handleFollow}>
                    팔로우
                </button>
            ) : (
                <button className="profileUnFollowBtn" onClick={handleUnFollow}>
                    언팔로우
                </button>
            )}

            <button className="profileCircleBtn share">
                <img src={shareIcon} alt="" className="shareIcon" />
            </button>
        </div>
    );
}

export default UserProfileBtn;
