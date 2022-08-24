import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TopMenuComponent from "../components/common/TopMenuComponent";
import "../pages/style/UploadProduct.css";
import { BASE_URL } from "../components/constants/baseUrl";
import { UserContext } from "../context/UserContext";

function EditProduct() {
    const { productId } = useParams();
    const { token, accountname } = useContext(UserContext);

    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [link, setLink] = useState("");
    const [itemImage, setItemImage] = useState("");

    const [block, setBlock] = useState(false);
    const [checkPrice, setCheckPrice] = useState(false);
    //기존이미지
    const [imageSrc, setImageSrc] = useState(null);
    //새로운 이미지
    const [newImgSrc, setNewImgSrc] = useState(null);

    const [isActive, setisActive] = useState(false);
    const [productPull, setProductPull] = useState(true);

    const saveActive = () => {
        if (itemName.length > 1 && itemName.length < 16) {
            setisActive(false);
            setProductPull(true);
        } else {
            setProductPull(false);
            setisActive(true);
        }
        return itemName.length > 1 && itemName.length < 16
            ? setBlock(false)
            : setBlock(true);
    };

    //기존 게시글 불러오기
    useEffect(() => {
        const productList = () => {
            axios
                .get(BASE_URL + `/product/detail/${productId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                })
                .then((response) => {
                    const productDetial = response.data.product;
                    setPrice(productDetial.price);
                    setItemName(productDetial.itemName);
                    setLink(productDetial.link);
                    setItemImage(productDetial.itemImage);
                    if (productDetial.itemImage) {
                        setImageSrc(productDetial.itemImage);
                    }
                })
                .catch((err) => console.log(err));
        };
        productList();
    }, []);

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
    const replacePrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
                setNewImgSrc(reader.result);
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
            setItemImage(
                "https://mandarin.api.weniv.co.kr/" + res.data.filename
            );

            if (res.data.message === "이미지 파일만 업로드가 가능합니다.") {
                alert(
                    "업로드 가능한 확장자명: *.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic"
                );
                setItemImage(itemImage);
            } else {
                setNewImgSrc(itemImage);
                imgPreview(productImage);
            }
        } catch (err) {
            console.log(err);
        }
    };

    //데이터 전달
    const replacePrice2 = parseInt(replacePrice.replaceAll(",", ""));
    const ProductData = {
        product: {
            itemName: itemName,
            price: replacePrice2,
            link: link,
            itemImage: itemImage,
        },
    };

    //전달하기
    const handleSubmitProduct = async () => {
        onChangeCheckPrice();
        const url = BASE_URL + `/product/${productId}`;
        try {
            const res = await axios(url, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
                data: ProductData,
            });
            console.log("product:", res.data.product);
            window.location = `/myprofile/${accountname}`;
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <TopMenuComponent
                topclassName="topBasicNav"
                rightclassName={`saveBtn ${productPull ? "on" : ""}`}
                inputtype="notext"
                title="저장"
                type="submit"
                disabled={isActive}
                handlerRightBtn={handleSubmitProduct}
            />

            <main className="mainUpload">
                <section className="container">
                    <h2 className="ir">상품등록페이지</h2>
                    <form action="">
                        <div
                            className="productImgRegister"
                            onKeyUp={saveActive}
                        >
                            <h3 className="">이미지 등록</h3>
                            <label
                                htmlFor="productImg"
                                className="imagePriview"
                                onKeyUp={saveActive}
                            >
                                {imageSrc && !newImgSrc ? (
                                    <img
                                        src={itemImage}
                                        className="imagePriview"
                                        name="img"
                                        alt="미리보기"
                                        onKeyUp={saveActive}
                                    ></img>
                                ) : null}
                                {newImgSrc && (
                                    <img
                                        src={itemImage}
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
                                onKeyUp={saveActive}
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
                                value={itemName}
                                onKeyUp={saveActive}
                            />
                            <strong
                                className={
                                    block
                                        ? "ProductErrMessage block"
                                        : "ProductErrMessage disabled"
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
                                placeholder="숫자만 입력 가능합니다."
                                onChange={handlePrice}
                                onKeyDown={handlePrice2}
                                value={replacePrice}
                                onKeyUp={saveActive}
                            />
                            <strong
                                onChange={onChangeCheckPrice}
                                className={
                                    checkPrice
                                        ? "ProductErrMessage block"
                                        : "ProductErrMessage disabled"
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
                                value={link}
                                onKeyUp={saveActive}
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
// }

export default EditProduct;
