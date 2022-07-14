import React from "react";
import { Link } from "react-router-dom";
import BasicProfileImg from "../common/BasicProfileImg";
import ProfileBtn from "./ProfileBtn";
import "./ProfileInfo.css";

function ProfileInfo({ profileInfo }) {
    const username = localStorage.getItem("username");
    const followLink = `/${username}/follower`;
    const folloingLink = `/${username}/folloing`;
    return (
        <div className="infoWrap">
            <div className="tempWrap">
                <Link to={followLink}>
                    <p className="followCount followers">
                        {profileInfo.profile.followerCount}
                    </p>
                    <p className="followName followers">followers</p>
                </Link>
                <BasicProfileImg size="lg" />
                <Link to={folloingLink}>
                    <p className="followCount following">
                        {profileInfo.profile.followingCount}
                    </p>
                    <p className="followName following">followings</p>
                </Link>
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
