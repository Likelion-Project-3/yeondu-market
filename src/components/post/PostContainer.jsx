import React from "react";
import postListOn from "../../assets/icon/icon-post-list-on.svg";
import postListOff from "../../assets/icon/icon-post-list-off.svg";
import postAlbumOn from "../../assets/icon/icon-post-album-on.svg";
import postAlbumOff from "../../assets/icon/icon-post-album-off.svg";

function PostContainer({
    postList,
    onClickList,
    onClickAlbum,
    listClick,
    albumClick,
}) {
    console.log(postList);
    return (
        <div className="postBtnWap">
            {postList.post && postList.post.length > 0 ? (
                <div className="btnContainer">
                    <button
                        className="profilePostBtn list"
                        onClick={onClickList}
                    >
                        {listClick === false ? (
                            <img src={postListOff} alt=""></img>
                        ) : (
                            <img src={postListOn} alt=""></img>
                        )}
                    </button>
                    <button
                        className="profilePostBtn album"
                        onClick={onClickAlbum}
                    >
                        {albumClick === false ? (
                            <img src={postAlbumOff} alt=""></img>
                        ) : (
                            <img src={postAlbumOn} alt=""></img>
                        )}
                    </button>
                </div>
            ) : null}
        </div>
    );
}

export default PostContainer;
