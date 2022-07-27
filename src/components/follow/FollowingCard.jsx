import React from "react";
import { Link } from "react-router-dom";

function FollowingCard({ followingList }) {
    console.log("card", followingList);
    const userUrl = `/profile/${followingList.accountname}`;
    return (
        <li className="followItem">
            <Link to={userUrl} className="followLink">
                <img src={followingList.image} alt="" className="followerImg" />
                <div className="followInfo">
                    <p className="followerName">{followingList.username}</p>
                    <p className="followerIntro">{followingList.intro}</p>
                </div>
            </Link>
            {/* 팔로우를 하고 있을 땐 취소, 하지 않을땐 팔로우,, */}
            {/* <button className="followBtn">팔로우</button> */}
            <button className="cancelBtn">취소</button>
        </li>
    );
}

export default FollowingCard;
