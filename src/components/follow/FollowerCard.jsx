import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { BASE_URL } from "../constants/baseUrl";

function FollowerCard({ followerList }) {
    const token = localStorage.getItem("token");

    const handleFollowBtn = () => {
        if (followerList.isfollow === true) {
            handleSubmitUnFollow();
            console.log(followerList.isfollow);
        } else {
            handleSubmitFollow();
        }
    };

    const handleSubmitFollow = async () => {
        try {
            const res = await axios(
                BASE_URL + `/profile/${followerList.accountname}/follow`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                }
            );
            console.log("팔로우", res);
            console.log(res.data.profile.isfollow);
        } catch (err) {
            console.log(err);
        }
    };

    //언팔로우
    const handleSubmitUnFollow = async () => {
        try {
            const res = await axios(
                BASE_URL + `/profile/${followerList.accountname}/unfollow`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                }
            );
            console.log("언팔로우", res);
            console.log(res.data.profile.isfollow);
        } catch (err) {
            console.log(err);
        }
    };

    const userUrl = `/profile/${followerList.accountname}`;
    return (
        <li className="followItem">
            <Link to={userUrl} className="followLink">
                <div className="followerImg">
                    <img src={followerList.image} alt="" />
                </div>
                <div className="followInfo">
                    <p className="followerName">{followerList.username}</p>
                    <p className="followerIntro">{followerList.intro}</p>
                </div>
            </Link>
            {followerList.isfollow === true ? (
                <button className="cancelBtn" onClick={handleFollowBtn}>
                    취소
                </button>
            ) : (
                <button className="followBtn" onClick={handleFollowBtn}>
                    팔로우
                </button>
            )}
        </li>
    );
}

export default FollowerCard;
