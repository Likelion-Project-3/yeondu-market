import React from "react";
import "./MyProfileBtn.css";

function MyProfileBtn() {
    const uploadProduct = () => {
        window.location.href = "/product/upload";
    };

    const editProfile = () => {
        window.location.href = "/editprofile";
    };

    return (
        <div className="InfoBtn">
            <button className="profileEdit" onClick={editProfile}>
                프로필 수정
            </button>
            <button className="productUpload" onClick={uploadProduct}>
                상품등록
            </button>
        </div>
    );
}

export default MyProfileBtn;
