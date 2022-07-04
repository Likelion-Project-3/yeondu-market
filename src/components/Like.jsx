import "./Like.css";
import { useState } from "react";

export default function Like() {
    const [like, setLike] = useState(false);

    const likeSwitch = () => {
        setLike(!like);
    }

    return (
        <span className="WraplikeBtn">
            <button type="button" className={like ? 'likeBtn on' : 'likeBtn'} onClick={likeSwitch} /> <em>22</em>
        </span>
    );
}