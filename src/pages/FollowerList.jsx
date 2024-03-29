import React from "react";
import FollowHeader from "../components/follow/FollowHeader";
import FollowerContainer from "../components/follow/FollowerContainer";
import TapMenu from "../components/common/TapMenu";
import "../pages/style/FollowerList.css";

function FollowerList() {
    return (
        <div className="followerWrap">
            <FollowHeader />
            <FollowerContainer />
            <TapMenu />
        </div>
    );
}

export default FollowerList;
