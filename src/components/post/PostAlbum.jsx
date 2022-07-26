import React, { useState } from "react";
import PostAlbumItem from "./PostAlbumItem";
import "./PostAlbum.css";
import { useEffect } from "react";
function PostAlbum({ postList }) {
    // console.log("!", postList);
    const [imageList, setImageList] = useState([]);
    const post = postList.post;
    //image가 없는 post는 전달 x

    useEffect(() => {
        const newList = post.filter((post) => post.image !== "");
        setImageList(newList);
        // console.log("newList", newList);
    }, []);
    // console.log("imageList", imageList);

    return (
        <div className="albumWrap">
            {imageList && imageList.length > 0
                ? imageList.map((imageList, id) => {
                      return (
                          <div key={id} className="postAlbum">
                              <PostAlbumItem imageList={imageList} />
                          </div>
                      );
                  })
                : null}
        </div>
    );
}

export default PostAlbum;
