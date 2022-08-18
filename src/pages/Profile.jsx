import React from "react";
import ProfileInfo from "../../components/profile/ProfileInfo";
import TopBasicNav from "../../components/TopBasicNav";
import "../pages/style/Profile.css";

function Profile() {
    return (
        <div className="profileWrap">
            <TopBasicNav />
            <ProfileInfo />
        </div>
    );
}

export default Profile;
