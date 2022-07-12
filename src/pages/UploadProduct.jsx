import React from "react";
import { useHistory } from "react-router-dom";
import prevBtn from "../../assets/icon/icon-arrow-left.svg";
import UploadFileBtn from "../../components/button/UploadFileBtn";
import "../pages/style/UploadProduct.css";
function ProductUpload() {
    let history = useHistory();
    return (
        <div>
            <nav className="topBasicNav">
                <button
                    className="prevBtn"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    {/* <img src={prevBtn} alt="" /> */}
                </button>
                <button className="saveBtn">저장</button>
            </nav>
            <main className="mainUpload">
                <section className="container">
                    <h2 className="ir">상품등록페이지</h2>
                    <form action="">
                        <div className="productImgRegister">
                            <h3 className="">이미지 등록</h3>
                            <div className="imagePriview" />
                            <UploadFileBtn
                                type="gray36"
                                position="absolute"
                                forAndId="productImg"
                                right="12px"
                                bottom="12px"
                            />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="productName">상품명</label>
                            <input
                                type="text"
                                className=""
                                id="productName"
                                placeholder="2~15자 이내여야 합니다."
                            />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="productPrice">가격</label>
                            <input
                                type="text"
                                name=""
                                id="productPrice"
                                placeholder="숫자만 입력 가능합니다."
                            />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="productLink">판매 링크</label>
                            <input
                                type="text"
                                name=""
                                id="productLink"
                                placeholder="URL을 입력해 주세요."
                            />
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default ProductUpload;
