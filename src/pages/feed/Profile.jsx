import React from "react";
import TopBasicNav from "../../components/TopBasicNav";
import "./Profile.css";
import ProfileInfo from "../../components/profile/ProfileInfo";
function Profile() {
    return (
        <div className="profileWrap">
            <TopBasicNav />
            <ProfileInfo />
        </div>
    );
}

export default Profile;
