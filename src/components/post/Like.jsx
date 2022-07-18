import "./Like.css";
import { useState } from "react";

function Like({ heartCount }) {
    const [like, setLike] = useState(false);

    const likeSwitch = () => {
        setLike(!like);
    };

    return (
        <span className="WraplikeBtn">
            <button
                type="button"
                className={like ? "likeBtn on" : "likeBtn"}
                onClick={likeSwitch}
            />{" "}
            <em>{heartCount}</em>
        </span>
    );
}
export default Like;
