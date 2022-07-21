import React, { useEffect, useState } from "react";
import "./PostAlbumItem.css";

function PostAlbumItem({ imageList }) {
    const [postImg, setPostImg] = useState("");
    const postsImage = `https://mandarin.api.weniv.co.kr/${postImg}`;
    const pI = imageList.image;

    useEffect(() => {
        if (imageList.image !== undefined) {
            setPostImg(pI.split(",")[0]);
        }
    }, []);
    return (
        <article className="postAlbumCard">
            <div className="">
                <div className="postAlbumImg">
                    {imageList.image ? <img src={postsImage} alt="" /> : null}
                </div>
            </div>
        </article>
    );
}

export default PostAlbumItem;
