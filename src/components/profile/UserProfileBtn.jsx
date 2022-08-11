import React from "react";
import { useState } from "react";
import axios from "axios";
import messageImg from "../../assets/icon/icon-message-circle2.svg";
import shareIcon from "../../assets/icon/icon-share.svg";
import "./UserProfileBtn.css";
import { BASE_URL } from "../constants/baseUrl";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../pages/MyProfile";
function UserProfileBtn() {
    const { profileInfo } = useContext(AppContext);
    const token = localStorage.getItem("token");
    const { accountName } = useParams();

    const [followdata, setFollowData] = useState(profileInfo.profile.isfollow);
    console.log("followdata", followdata);

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
            console.log("팔로우", res);
            console.log("isfollow", res.data.profile.isfollow);
            setFollowData(res.data.profile.isfollow);
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
            console.log("언팔로우", res);
            console.log("isfollow", res.data.profile.isfollow);
            setFollowData(res.data.profile.isfollow);
        } catch (err) {
            console.log(err);
        }
    };

    const handleFollowBtn = () => {
        console.log("22followdata", followdata);
        if (followdata === true) {
            handleSubmitUnFollow();
        } else {
            handleSubmitFollow();
        }
    };

    return (
        <div className="InfoBtn">
            <button className="profileCircleBtn chat">
                <img src={messageImg} alt="" className="messageImg" />
            </button>
            {followdata === true ? (
                <button
                    className="profileUnFollowBtn"
                    onClick={handleFollowBtn}
                >
                    언팔로우
                </button>
            ) : (
                <button className="profileFollowBtn" onClick={handleFollowBtn}>
                    팔로우
                </button>
            )}

            <button className="profileCircleBtn share">
                <img src={shareIcon} alt="" className="shareIcon" />
            </button>
        </div>
    );
}

export default UserProfileBtn;
