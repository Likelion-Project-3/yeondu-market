import React from "react";
import ProfileBtn from "./ProfileBtn";
import "./ProfileInfo.css";
import BasicProfileImg from "../BasicProfileImg";
function ProfileInfo() {
    return (
        <div className="infoWrap">
            <div className="tempWrap">
                <a href="/followerlist">
                    <p className="followCount followers">2950</p>
                    <p className="followName followers">followers</p>
                </a>
                <BasicProfileImg size="lg" />
                <a href="/">
                    <p className="followCount following">128</p>
                    <p className="followName following">followings</p>
                </a>
            </div>
            <div className="">
                <p className="userName">애월읍 위니브 감귤공장</p>
                <p className="userID">@ weniv_Mandarin</p>
                <p className="userIntro">
                    애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장
                </p>
            </div>
            <ProfileBtn />
        </div>
    );
}

export default ProfileInfo;
