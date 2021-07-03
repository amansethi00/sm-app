import React from "react";
import { Avatar } from "@material-ui/core";
export const UserInfo = ({ user }) => {
  return (
    <div>
      <Avatar>{user.username[0]}</Avatar>
    </div>
  );
};
