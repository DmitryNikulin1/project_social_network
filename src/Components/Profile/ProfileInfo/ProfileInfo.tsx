import React from "react";
import { ImgContent, TextContent } from "./ProfileInfo.styled";

const ProfileInfo = ({ ...props }) => {
  return (
    <TextContent>
      <div>
        <ImgContent src="https://avatars.mds.yandex.net/i?id=97d7f89aebad040ec56f5c6bf90f70eac7bb287f-9834975-images-thumbs&n=13" />
      </div>
      <div>ava + description</div>
    </TextContent>
  );
};

export default ProfileInfo;
