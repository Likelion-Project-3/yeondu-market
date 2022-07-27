import React from "react";
import BasicImg from "../../assets/basic-profile-img.svg";
function FollowingCard({ followingList }) {
    console.log("card", followingList);
    return (
        <li className="followItem">
            <a href="" className="followLink">
                <img src={BasicImg} alt="" className="followerImg" />
                <div className="followInfo">
                    <p className="followerName">{followingList.username}</p>
                    <p className="followerIntro">{followingList.accountname}</p>
                </div>
            </a>
            {/* <button className="followBtn">팔로우</button> */}
            <button className="cancelBtn">취소</button>
        </li>
    );
}

export default FollowingCard;
