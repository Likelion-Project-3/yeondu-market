import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MyProfileBtn from "./MyProfileBtn";
import UserProfileBtn from "./UserProfileBtn";

function ProfileBtn() {
    const { accountName } = useParams();
    const name = localStorage.getItem("accountname");
    return accountName === name ? <MyProfileBtn /> : <UserProfileBtn />;
}

export default ProfileBtn;
