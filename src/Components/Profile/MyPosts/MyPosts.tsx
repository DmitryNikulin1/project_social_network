import React, { useState } from "react";
import { Button, Input, TextContent } from "./MyPosts.styled";
import MyPost from "./Post/MyPost";
import { MyButton } from "../../UI/MyButton/MyButton";
import { MyInput } from "../../UI/MyInput/MyInput";

const MyPosts = (props) => {
  const [posts, setPosts] = useState(props.posts);

  const [post, setPost] = useState({ messages: "" });

  const addNewPost = () => {
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ messages: " " });
  };
  debugger;
  return (
    <TextContent>
      <div>
        <Input>
          <MyInput
            value={post.messages}
            onChange={(e) => setPost({ ...post, messages: e.target.value })}
            type="text"
          />
        </Input>
        <Button>
          <MyButton onClick={addNewPost}>Add Post</MyButton>
        </Button>
      </div>
      <div>My post</div>
      <div>
        {posts.map((p, index) => (
          <MyPost
            number={index + 1}
            key={posts.id}
            messages={p.messages}
            LikesCount={p.likesCount}
          />
        ))}
      </div>
    </TextContent>
  );
};

export default MyPosts;
