import React from "react";
import BasicProfileImg from "../common/BasicProfileImg";
import ProfileBtn from "./ProfileBtn";
import "./ProfileInfo.css";

function ProfileInfo({ profileInfo }) {
    return (
        <div className="infoWrap">
            <div className="tempWrap">
                <a href="/followerlist">
                    <p className="followCount followers">
                        {profileInfo.profile.followerCount}
                    </p>
                    <p className="followName followers">followers</p>
                </a>
                <BasicProfileImg size="lg" />
                <a href="/">
                    <p className="followCount following">
                        {profileInfo.profile.followingCount}
                    </p>
                    <p className="followName following">followings</p>
                </a>
            </div>
            <div className="">
                <p className="userName">{profileInfo.profile.username}</p>
                <p className="userID">@ {profileInfo.profile.accountname}</p>
                <p className="userIntro">{profileInfo.profile.intro}</p>
            </div>
            <ProfileBtn />
        </div>
    );
}

export default ProfileInfo;
