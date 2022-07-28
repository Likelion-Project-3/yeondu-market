import React from "react";
import { createContext } from "react";
import { Link, useParams } from "react-router-dom";
import BasicProfileImg from "../common/BasicProfileImg";
import ProfileBtn from "./ProfileBtn";
import "./ProfileInfo.css";

function ProfileInfo({ profileInfo }) {
    const username = localStorage.getItem("username");
    const { accountName } = useParams();
    console.log("~~", accountName);
    const followLink = `/${accountName}/follower`;
    const folloingLink = `/${accountName}/following`;

    const accountContext = createContext(accountName);

    const profile = profileInfo.profile;
    return (
        <div className="infoWrap">
            {profile ? (
                <>
                    <div className="tempWrap">
                        <Link to={followLink}>
                            <p className="followCount followers">
                                {profile.followerCount}
                            </p>
                            <p className="followName followers">followers</p>
                        </Link>
                        <BasicProfileImg size="lg" src={profile.image} />
                        <Link to={folloingLink}>
                            <p className="followCount following">
                                {profile.followingCount}
                            </p>
                            <p className="followName following">followings</p>
                        </Link>
                    </div>
                    <div className="">
                        <p className="userName">{profile.username}</p>
                        <p className="userID">@{profile.accountname}</p>
                        <p className="userIntro">{profile.intro}</p>
                    </div>
                </>
            ) : null}
            <ProfileBtn />
        </div>
    );
}

export default ProfileInfo;
