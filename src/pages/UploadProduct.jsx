import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import prevBtn from "../assets/icon/icon-arrow-left.svg";
import UploadFileBtn from "../components/button/UploadFileBtn";
import style from "../pages/style/UploadProduct.css";
import "../pages/style/UploadProduct.css";
import { BASE_URL } from "../components/constants/baseUrl";
import { useEffect } from "react";
import { useState } from "react";
function UploadProduct() {
    let history = useHistory();
    const token = localStorage.getItem("Token");
    const accountname = localStorage.getItem("accountname");
    const url = BASE_URL + "/product";
    const [product, setProduct] = useState([]);

    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [link, setLink] = useState("");
    const [itemImage, setItemImage] = useState("");

    const [block, setBlock] = useState(false);
    const [checkPrice, setCheckPrice] = useState(false);
    // const [block, setBlock] = useState(false);

    const handleItemName = (e) => {
        setItemName(e.target.value);
        console.log(itemName.length);
    };
    const handlePrice = (e) => {
        setPrice(e.target.value);
    };
    const handleLink = (e) => {
        setLink(e.target.value);
    };
    const handleItemImage = (e) => {
        setItemImage(e.target.value);
    };

    // 판매명 2~15자
    const onChangeCheckName = () => {
        if (itemName.length >= 15 || itemName.length <= 2) {
            setBlock(true);
            alert("2-15자 이내로 입력하세요.");
        } else {
            setBlock(false);
        }
        console.log("block", block);
    };

    // 판매명 2~15자
    const onChangeCheckPrice = () => {
        if (isNaN(price)) {
            setCheckPrice(true);
            alert("숫자만 입력 가능합니다.");
        } else {
            setCheckPrice(false);
        }
        console.log("checkPrice", checkPrice);
    };

    //이미지 전달
    const uploadImage = () => {
        axios
            .post(BASE_URL + "/image/uploadfile", {})
            .then((response) => {
                setItemImage(response.data);
            })
            .catch((err) => console.log(err));
    };

    //데이터 전달
    const ProductData = {
        product: {
            itemName: itemName,
            price: price,
            link: link,
            itemImage: itemImage,
        },
    };
    //전달하기
    const handleSubmitProduct = async () => {
        console.log("itemName : ", itemName);
        console.log("price : ", price);
        console.log("link : ", link);
        onChangeCheckName();
        onChangeCheckPrice();
        // try {
        //     const res = await fetch(url, {
        //         method: "POST",
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //             "Content-type": "application/json",
        //         },
        //         body: JSON.stringify(ProductData),
        //     });
        //     const resJson = await res.json();
        //     console.log("resJson:", resJson);
        // } catch (err) {
        //     console.error(err);
        // }
        // axios
        //     .post(url, ProductData, {
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //             "Content-type": "application/json",
        //         },
        //     })
        //     .then((response) => {
        //         console.log(response);
        //         if (resJson.status !== 422) {

        //         }
        //         else {
        //             console.log(error);
        //         }
        //     })
        //     .catch((err) => console.log(err));
    };

    return (
        <div>
            <nav className="topBasicNav">
                <button
                    className="prevBtn"
                    onClick={() => {
                        history.goBack();
                    }}
                ></button>
                <button className="saveBtn" onClick={handleSubmitProduct}>
                    저장
                </button>
            </nav>
            <main className="mainUpload">
                <section className="container">
                    <h2 className="ir">상품등록페이지</h2>
                    <form action="">
                        <div className="productImgRegister">
                            <h3 className="">이미지 등록</h3>
                            {/* <div className="imagePriview" /> */}
                            {/* <UploadFileBtn
                                type="gray36"
                                position="absolute"
                                forAndId="productImg"
                                right="12px"
                                bottom="12px"
                            /> */}
                            <label
                                htmlFor="productImg"
                                className="imagePriview"
                            ></label>
                            <input type="file" id="productImg" className="ir" />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="productName">상품명</label>
                            <input
                                type="text"
                                className=""
                                id="productName"
                                placeholder="2~15자 이내여야 합니다."
                                onChange={handleItemName}
                            />
                            <strong
                                onChange={onChangeCheckName}
                                className={
                                    block
                                        ? "ProductErrMessage disble"
                                        : "ProductErrMessage prodName"
                                }
                            >
                                *2~15자 이내여야 합니다.
                            </strong>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="productPrice">가격</label>
                            <input
                                type="text"
                                name=""
                                id="productPrice"
                                placeholder="숫자만 입력 가능합니다."
                                onChange={handlePrice}
                            />
                            <strong
                                onChange={onChangeCheckPrice}
                                className={
                                    checkPrice
                                        ? "ProductErrMessage disble"
                                        : "ProductErrMessage prodPrice"
                                }
                            >
                                *숫자만 입력 가능합니다.
                            </strong>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="productLink">판매 링크</label>
                            <input
                                type="text"
                                name=""
                                id="productLink"
                                placeholder="URL을 입력해 주세요."
                                onChange={handleLink}
                            />
                            <strong className="ProductErrMessage prodLink">
                                *URL을 입력해 주세요.
                            </strong>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default UploadProduct;
