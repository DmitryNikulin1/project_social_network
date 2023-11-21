import React from "react";
import { PostImg } from "./MyPost.styled";

const MyPost = (props) => {
  // debugger
  return (
    <div>
      <div>
        <PostImg src="https://avatars.mds.yandex.net/i?id=7a69a91c44accaa08a737115acb2dca3954c9476-10849343-images-thumbs&n=13" />
        {props.number} {props.messages}
      </div>

      <div>
        <span>Like</span>
        {props.LikesCount}
      </div>
    </div>
  );
};

export default MyPost;
