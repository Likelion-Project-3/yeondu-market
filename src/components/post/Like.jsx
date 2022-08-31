import { useContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
import { UserContext } from "../../context/UserContext";
import "./Like.css";

function Like({ heartCount, postId, hearted }) {
    const [like, setLike] = useState(hearted);
    const [likeCount, setLikeCount] = useState(heartCount);
    const { token } = useContext(UserContext);

    const handleLike = (e) => {
        if (like === false) {
            setLike(true);
            setLikeCount(likeCount + 1);
            const onLike = async () => {
                try {
                    const response = await axios.post(
                        BASE_URL + `/post/${postId}/heart`,
                        [],
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                } catch (err) {
                    console.error(err);
                    setLike(false);
                    setLikeCount(likeCount);
                }
            };
            onLike();
        } else if (like === true) {
            setLike(false);
            setLikeCount(likeCount - 1);
            const offLike = async () => {
                try {
                    const response = await axios.delete(
                        BASE_URL + `/post/${postId}/unheart`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                } catch (err) {
                    console.error(err);
                    setLike(true);
                    setLikeCount(likeCount);
                }
            };
            offLike();
        }
    };

    return (
        <span className="WraplikeBtn">
            <span className="ir">좋아요 버튼</span>
            <button
                type="button"
                className={like ? "likeBtn on" : "likeBtn"}
                onClick={handleLike}
            />{" "}
            <em>{likeCount}</em>
        </span>
    );
}
export default Like;
