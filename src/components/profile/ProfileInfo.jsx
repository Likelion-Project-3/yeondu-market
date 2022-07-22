import React from "react";
import { Link } from "react-router-dom";
import BasicProfileImg from "../common/BasicProfileImg";
import ProfileBtn from "./ProfileBtn";
import "./ProfileInfo.css";

function ProfileInfo({ profileInfo }) {
    const username = localStorage.getItem("username");
    const followLink = `/${username}/follower`;
    const folloingLink = `/${username}/following`;
    // console.log("user", profileInfo.user);
    const user = profileInfo.user;
    return (
        <div className="infoWrap">
            <div className="tempWrap">
                <Link to={followLink}>
                    <p className="followCount followers">
                        {user.followerCount}
                    </p>
                    <p className="followName followers">followers</p>
                </Link>
                <BasicProfileImg size="lg" src={user.image} />
                <Link to={folloingLink}>
                    <p className="followCount following">
                        {user.followingCount}
                    </p>
                    <p className="followName following">followings</p>
                </Link>
            </div>
            <div className="">
                <p className="userName">{user.username}</p>
                <p className="userID">@ {user.accountname}</p>
                <p className="userIntro">{user.intro}</p>
            </div>
            <ProfileBtn />
        </div>
    );
}

export default ProfileInfo;
