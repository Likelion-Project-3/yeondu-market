import React from "react";
import UploadProduct from "../../pages/UploadProduct";
import "./MyProfileBtn.css";
function MyProfileBtn() {
    const uploadProduct = () => {
        window.location.href = "/product/upload";
    };
    return (
        <div className="InfoBtn">
            <button className="profileEdit">프로필 수정</button>
            <button className="productUpload" onClick={uploadProduct}>
                상품등록
            </button>
        </div>
    );
}

export default MyProfileBtn;
