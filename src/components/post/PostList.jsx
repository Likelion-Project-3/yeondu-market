import React from "react";
import PostItem from "./PostItem";
import "./postList.css";

function PostList({ postList }) {
    // console.log("!!!postList", postList);
    const post = postList.post;
    // console.log("post", post);

    return (
        <div className="postListWrap">
            {post && post.length > 0
                ? post.map((post, id) => {
                      return (
                          <div key={id}>
                              <PostItem post={post} />
                          </div>
                      );
                  })
                : "없숩니다"}
        </div>
    );
}

export default PostList;
