import React, { useEffect, useState } from "react";
import "./PostAlbumItem.css";

function PostAlbumItem({ imageList }) {
    const [postImg, setPostImg] = useState("");
    const pI = imageList.image;

    useEffect(() => {
        if (imageList.image !== undefined) {
            setPostImg(pI.split(",")[0]);
        }
    }, []);
    const showDetail = () => {
        window.location.href = `/post/${imageList.id}`;
    };
    return (
        <article className="postAlbumCard">
            <div className="">
                <div className="postAlbumImg" onClick={showDetail}>
                    {imageList.image ? (
                        <img src={imageList.image} alt="" />
                    ) : null}
                </div>
            </div>
        </article>
    );
}

export default PostAlbumItem;
