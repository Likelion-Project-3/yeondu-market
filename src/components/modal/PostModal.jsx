import { BASE_URL } from "../constants/baseUrl";
import axios from "axios";
import "./profileModal.css";

function PostModal(props) {
    const deletePost = async () => {
        // const url = BASE_URL + "/post/62d60b3a82fdcc712f4d4713";
        const post_id = props.data.post.id;
        const url = BASE_URL + `/post/${post_id}`;
        const token = localStorage.getItem("token");

        try {
            const res = await axios(url, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });
            alert("삭제되었습니다.");
            console.log(res);
        } catch (err) {
            // 404페이지로 이동
            console.log(err);
        }
    };

    return (
        <div className="ModalBtnWrap">
            <button className="ModalBtn" onClick={deletePost}>
                삭제
            </button>
            <a href="/postmodify" className="ModalBtn">
                수정
            </a>
        </div>
    );
}
export default PostModal;
