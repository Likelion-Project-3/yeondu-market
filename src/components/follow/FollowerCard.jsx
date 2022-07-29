import React, { useState } from "react";
import { Link } from "react-router-dom";

function FollowerCard({ followerList }) {
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
            <button className="followBtn">팔로우</button>
            {/* <button className="cancelBtn">취소</button> */}
        </li>
    );
}

export default FollowerCard;
