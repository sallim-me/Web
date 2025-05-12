import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./styled";
import chatOn from "../../../assets/chat-on.svg";
import chatOff from "../../../assets/chat-off.svg";
import postOn from "../../../assets/post-on.svg";
import postOff from "../../../assets/post-off.svg";
import myPageOn from "../../../assets/my-page-on.svg";
import myPageOff from "../../../assets/my-page-off.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { path: "/chat", iconOn: chatOn, iconOff: chatOff, label: "채팅" },
    { path: "/post/list", iconOn: postOn, iconOff: postOff, label: "게시판" },
    {
      path: "/my-page",
      iconOn: myPageOn,
      iconOff: myPageOff,
      label: "마이페이지",
    },
  ];

  return (
    <S.NavbarContainer>
      {tabs.map((tab) => (
        <S.TabButton
          key={tab.path}
          isActive={location.pathname === tab.path}
          onClick={() => navigate(tab.path)}
        >
          <img
            src={location.pathname === tab.path ? tab.iconOn : tab.iconOff}
            alt={tab.label}
          />
        </S.TabButton>
      ))}
    </S.NavbarContainer>
  );
};

export default Navbar;
