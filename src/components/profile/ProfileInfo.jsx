import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../pages/MyProfile";
import BasicProfileImg from "../common/BasicProfileImg";
import ProfileBtn from "./ProfileBtn";
import "./ProfileInfo.css";

function ProfileInfo() {
    const { accountName } = useParams();
    const { profileInfo } = useContext(AppContext);
    const profile = profileInfo.profile;
    return (
        <div className="infoWrap">
            {profile ? (
                <>
                    <div className="tempWrap">
                        <Link
                            to={{
                                pathname: `/${accountName}/follower`,
                                state: { accountName: accountName },
                            }}
                        >
                            <p className="followCount followers">
                                {profile.followerCount}
                            </p>
                            <p className="followName followers">followers</p>
                        </Link>
                        <BasicProfileImg size="lg" src={profile.image} />
                        <Link
                            to={{
                                pathname: `/${accountName}/following`,
                                state: { accountName: accountName },
                            }}
                        >
                            <p className="followCount following">
                                {profile.followingCount}
                            </p>
                            <p className="followName following">followings</p>
                        </Link>
                    </div>
                    <div className="profileInfoWrap">
                        <p className="userName">{profile.username}</p>
                        <p className="userID">@ {profile.accountname}</p>
                        <p className="userIntro">{profile.intro}</p>
                    </div>
                </>
            ) : null}
            <ProfileBtn />
        </div>
    );
}

export default ProfileInfo;
