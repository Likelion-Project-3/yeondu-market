import React from "react";
import BasicImg from "../../assets/basic-profile-img.svg";
function FollowerCard() {
    return (
        <li className="followItem">
            <a href="" className="followLink">
                <img src={BasicImg} alt="" className="followerImg" />
                <div className="followInfo">
                    <p className="followerName">애월읍 한라봉 최고 맛집</p>
                    <p className="followerIntro">정성을 다해 농사짓는 한라봉</p>
                </div>
            </a>
            <button className="followBtn">팔로우</button>
            {/* <button className="cancelBtn">취소</button> */}
        </li>
    );
}

export default FollowerCard;
