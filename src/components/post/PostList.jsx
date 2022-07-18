import React from "react";
import PostItem from "./PostItem";

function PostList({ postList }) {
    console.log("@@", postList);
    const post = postList.post;
    console.log("@aa", post);
    return (
        <div>
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