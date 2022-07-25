import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import UploadFileBtn from "../components/button/UploadFileBtn";
import TopMenuComponent from "../components/common/TopMenuComponent";
import "../pages/style/UploadProduct.css";
import { BASE_URL } from "../components/constants/baseUrl";
import { useState } from "react";

function UploadProduct() {
    let history = useHistory();
    const token = localStorage.getItem("token");

    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [link, setLink] = useState("");
    const [itemImage, setItemImage] = useState("");

    const [block, setBlock] = useState(false);
    const [checkPrice, setCheckPrice] = useState(false);

    const [imageSrc, setImageSrc] = useState(null);

    const handleItemName = (e) => {
        setItemName(e.target.value);
    };
    //숫자 1000단위 콤마
    const priceFormat = (str) => {
        const comma = (str) => {
            str = String(str);
            return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
        };
        const uncomma = (str) => {
            str = String(str);
            return str.replace(/[^\d]+/g, "");
        };
        return comma(uncomma(str));
    };

    const handlePrice = (e) => {
        const value = e.target.value;
        setPrice(priceFormat(value));
    };
    //
    const handlePrice2 = (event) => {
        if (
            (event.keyCode > 47 && event.keyCode < 58) ||
            event.keyCode === 8 || //backspace
            event.keyCode === 37 ||
            event.keyCode === 39 || //방향키 →, ←
            event.keyCode === 46 //delete키
        ) {
            return;
        } else {
            event.preventDefault();
        }
    };

    const handleLink = (e) => {
        setLink(e.target.value);
    };

    // 판매명 2~15자 확인
    const onChangeCheckName = (e) => {
        if (itemName.length > 15 || itemName.length < 2) {
            setBlock(true);
            alert("2-15자 이내로 입력하세요.");
        } else {
            setBlock(false);
        }
    };

    // 숫자 유효성검사
    const onChangeCheckPrice = () => {
        if (isNaN(price)) {
            setCheckPrice(true);
        } else {
            setCheckPrice(false);
        }
    };

    const formData = new FormData();
    // 이미지 미리보기
    const imgPreview = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result);
                resolve();
            };
        });
    };
    //이미지 전달
    const handelUploadImage = async (e) => {
        const productImage = e.target.files[0];

        formData.append("image", productImage);
        try {
            const res = await axios(BASE_URL + "/image/uploadfile", {
                method: "POST",
                headers: {
                    "Content-type": "multipart/form-data",
                },
                data: formData,
            });
            console.log(res);
            setItemImage(res.data.filename);

            if (res.data.message === "이미지 파일만 업로드가 가능합니다.") {
                alert(
                    "업로드 가능한 확장자명: *.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic"
                );
                setItemImage(itemImage);
            } else {
                setImageSrc(itemImage);
                imgPreview(productImage);
            }
        } catch (err) {
            console.log(err);
        }
    };
    //데이터 전달
    const replacePrice = parseInt(price.replaceAll(",", ""));
    const ProductData = {
        product: {
            itemName: itemName,
            price: replacePrice,
            link: link,
            itemImage: itemImage,
        },
    };
    console.log("~~!!", ProductData.product.price);
    //전달하기
    const handleSubmitProduct = async () => {
        onChangeCheckName();
        onChangeCheckPrice();
        console.log("~~", ProductData.product.price);
        const url = BASE_URL + "/product";
        try {
            const res = await axios(url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
                data: ProductData,
            });
            console.log("product:", res);
            // window.location = "/myprofile";
        } catch (err) {
            console.error(err);
        }
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
            {/* <TopMenuComponent
                topclassName="topBasicNav"
                rightclassName="saveBtn"
                inputtype="notext"
                title="저장"
                type="submit"
            /> */}

            <main className="mainUpload">
                <section className="container">
                    <h2 className="ir">상품등록페이지</h2>
                    <form action="">
                        <div className="productImgRegister">
                            <h3 className="">이미지 등록</h3>
                            <label
                                htmlFor="productImg"
                                className="imagePriview"
                            >
                                {imageSrc && (
                                    <img
                                        src={imageSrc}
                                        className="imagePriview"
                                        name="img"
                                        alt="미리보기"
                                    ></img>
                                )}
                            </label>
                            <input
                                type="file"
                                id="productImg"
                                className="ir"
                                onChange={handelUploadImage}
                            />
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
                                id="productPrice"
                                value={price}
                                placeholder="숫자만 입력 가능합니다."
                                onChange={handlePrice}
                                onKeyDown={handlePrice2}
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
