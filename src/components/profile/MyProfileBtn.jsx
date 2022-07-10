import React from "react";
import "./MyProfileBtn.css";
function MyProfileBtn() {
    return (
        <div className="InfoBtn">
            <button className="profileEdit">프로필 수정</button>
            <button className="productUpload">상품등록</button>
        </div>
    );
}

export default MyProfileBtn;
