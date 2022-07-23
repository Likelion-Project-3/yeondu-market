import { useHistory } from "react-router-dom";
import "./Alert.css";
import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

function ProductAlert({ productId, handleCancel }) {
    const token = localStorage.getItem("token");
    console.log("tt");
    const productDelete = async () => {
        const url = BASE_URL + `/product/${productId}`;

        try {
            const res = await axios(url, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
                // data: ProductData,
            });
            console.log(res);
            return window.location.replace("/myprofile");
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="alertWrap">
            <div className="ModalAlert">
                <span className="alertText">상품을 삭제할까요?</span>
                <div className="wrapAlert">
                    <button
                        className="modalAlertBtn cancel"
                        onClick={handleCancel}
                    >
                        취소
                    </button>
                    <button
                        className="modalAlertBtn delete"
                        onClick={productDelete}
                    >
                        삭제
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ProductAlert;
