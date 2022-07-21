import { BASE_URL } from "../constants/baseUrl";
import axios from "axios";
import "./profileModal.css";

function ReportPostModal(props) {
    const token = localStorage.getItem("token");
    const postId = props.postId;
    // const postId = "62d76d4c17ae666581792572"; // 테스트용

    const report = async () => {
        const url = BASE_URL + `/post/${postId}/report`;
        try {
            const res = await axios(url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });
            console.log(res);
        } catch (err) {
            console.log(err);
            alert("존재하지 않는 게시글입니다.");
        }
    };

    return (
        <div className="ModalBtnWrap">
            <button className="ModalBtn" onClick={report}>
                신고하기
            </button>
        </div>
    );
}

export default ReportPostModal;
