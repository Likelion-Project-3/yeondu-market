import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
import { UserContext } from "../../context/UserContext";

function FollowingCard({ followingList }) {
    const [follow, setFollow] = useState(followingList.isfollow);
    const { token, accountname } = useContext(UserContext);
    const handleFollowBtn = () => {
        if (follow === true) {
            handleSubmitUnFollow();
        } else {
            handleSubmitFollow();
        }
    };

    //언팔로우
    const handleSubmitUnFollow = async () => {
        try {
            const res = await axios(
                BASE_URL + `/profile/${followingList.accountname}/unfollow`,
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
            setFollow(res.data.profile.isfollow);
        } catch (err) {
            console.log(err);
        }
    };

    //팔로우
    const handleSubmitFollow = async () => {
        try {
            const res = await axios(
                BASE_URL + `/profile/${followingList.accountname}/follow`,
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
            setFollow(res.data.profile.isfollow);
        } catch (err) {
            console.log(err);
        }
    };

    const userUrl = `/profile/${followingList.accountname}`;

    return (
        <li className="followItem">
            <Link to={userUrl} className="followLink">
                <div className="followerImg">
                    <img src={followingList.image} alt="" />
                </div>
                <div className="followInfo">
                    <p className="followerName">{followingList.username}</p>
                    <p className="followerIntro">{followingList.intro}</p>
                </div>
            </Link>
            {accountname === followingList.accountname ? null : follow ===
              true ? (
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

export default FollowingCard;
