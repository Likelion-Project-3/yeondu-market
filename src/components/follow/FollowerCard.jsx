import React from "react";
import { Link } from "react-router-dom";

function FollowerCard({ followerList }) {
    const userUrl = `/profile/${followerList.accountname}`;
    return (
        <li className="followItem">
            <Link to={userUrl} className="followLink">
                <img src={followerList.image} alt="" className="followerImg" />
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
